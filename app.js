/**
 * 主应用逻辑
 * 处理文件上传、图片处理和UI更新
 * 支持多语言切换功能
 */

// 当前语言，默认从localStorage读取或使用中文
let currentLanguage = localStorage.getItem('preferredLanguage') || 'zh-CN';

// 获取DOM元素
const fileInput = document.getElementById('file-upload');
const uploadLabel = document.getElementById('upload-label');
const errorMessage = document.getElementById('error-message');
const previewSection = document.getElementById('preview-section');
const originalImage = document.getElementById('original-image');
const originalImageTitle = document.getElementById('original-image-title');
const resultsSection = document.getElementById('results-section');
const resultsTitle = document.getElementById('results-title');
const resultsDescription = document.getElementById('results-description');
const downloadAllButton = document.getElementById('download-all-button');
const imagesGrid = document.getElementById('images-grid');
const loadingOverlay = document.getElementById('loading-overlay');
const loadingText = document.getElementById('loading-text');
const pageTitle = document.getElementById('page-title');
const pageSubtitle = document.getElementById('page-subtitle');
const languageSwitcher = document.getElementById('language-switcher');

// 存储切分后的图片数据
let cutImages = [];

/**
 * 获取当前语言的翻译文本
 * @param {string} key - 翻译键名
 * @returns {string} 翻译后的文本
 */
function t(key) {
    return translations[currentLanguage]?.[key] || translations['zh-CN'][key] || key;
}

/**
 * 更新页面所有文本为当前语言
 */
function updateLanguage() {
    // 更新页面标题和副标题
    pageTitle.textContent = t('title');
    pageSubtitle.textContent = t('subtitle');
    document.title = t('title') + ' - UI素材切分器';
    
    // 更新按钮文本
    if (!loadingOverlay.style.display || loadingOverlay.style.display === 'none') {
        uploadLabel.textContent = t('selectImage');
    }
    
    // 更新原始图片标题
    if (previewSection.style.display === 'block') {
        originalImageTitle.textContent = t('originalImage');
    }
    
    // 更新结果区域
    if (cutImages.length > 0) {
        resultsTitle.textContent = `${t('resultsTitle')} - ${t('identifiedComponents')} ${cutImages.length} ${t('components')}`;
        downloadAllButton.textContent = `${t('downloadAll')} (${cutImages.length})`;
        resultsDescription.textContent = t('resultsDescription');
        
        // 更新所有图片卡片中的文本
        updateImageCards();
    }
    
    // 更新加载文本
    loadingText.textContent = t('processingImage');
    
    // 更新HTML lang属性
    document.documentElement.lang = currentLanguage;
}

/**
 * 更新所有图片卡片的文本
 */
function updateImageCards() {
    const cards = imagesGrid.querySelectorAll('.image-card');
    cards.forEach((card, index) => {
        // 更新组件编号
        const imageNumber = card.querySelector('.image-number');
        if (imageNumber) {
            imageNumber.textContent = `${t('component')} #${index + 1}`;
        }
        
        // 更新图片信息
        const imageInfo = card.querySelector('.image-info');
        if (imageInfo) {
            const sizeInfo = imageInfo.querySelector('p:first-child');
            const positionInfo = imageInfo.querySelector('p:nth-child(2)');
            const downloadButton = imageInfo.querySelector('.download-button');
            
            if (sizeInfo && cutImages[index]) {
                sizeInfo.innerHTML = `<strong>${t('size')}:</strong> ${cutImages[index].width} × ${cutImages[index].height} ${t('pixels')}`;
            }
            
            if (positionInfo && cutImages[index]) {
                positionInfo.innerHTML = `<strong>${t('position')}:</strong> (${cutImages[index].x}, ${cutImages[index].y})`;
            }
            
            if (downloadButton) {
                downloadButton.textContent = t('downloadComponent');
            }
        }
    });
}

/**
 * 初始化语言切换器
 */
function initLanguageSwitcher() {
    // 清空语言切换器
    languageSwitcher.innerHTML = '';
    
    // 为每种语言创建按钮
    Object.keys(languageConfig).forEach(langCode => {
        const lang = languageConfig[langCode];
        const button = document.createElement('button');
        button.className = `language-flag ${currentLanguage === langCode ? 'active' : ''}`;
        button.title = lang.name;
        button.setAttribute('aria-label', `切换到${lang.name}`);
        
        // 创建国旗emoji
        const flagEmoji = document.createElement('span');
        flagEmoji.className = 'flag-emoji';
        flagEmoji.textContent = lang.flag;
        
        // 创建语言代码
        const langCodeSpan = document.createElement('span');
        langCodeSpan.className = 'language-code';
        langCodeSpan.textContent = lang.code;
        
        // 组装按钮
        button.appendChild(flagEmoji);
        button.appendChild(langCodeSpan);
        
        // 在按钮上存储语言代码，方便后续查找
        button.dataset.langCode = langCode;
        
        // 绑定点击事件
        button.addEventListener('click', () => {
            changeLanguage(langCode);
        });
        
        languageSwitcher.appendChild(button);
    });
}

/**
 * 切换语言
 * @param {string} langCode - 语言代码
 */
function changeLanguage(langCode) {
    if (langCode === currentLanguage) return;
    
    currentLanguage = langCode;
    
    // 保存到localStorage
    localStorage.setItem('preferredLanguage', langCode);
    
    // 更新语言切换器按钮状态
    const buttons = languageSwitcher.querySelectorAll('.language-flag');
    buttons.forEach(button => {
        // 使用data属性直接获取语言代码
        if (button.dataset.langCode === langCode) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // 更新页面文本
    updateLanguage();
}

/**
 * 显示错误信息
 * @param {string} message - 错误消息
 */
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

/**
 * 隐藏错误信息
 */
function hideError() {
    errorMessage.style.display = 'none';
}

/**
 * 显示加载指示器
 */
function showLoading() {
    loadingOverlay.style.display = 'flex';
    loadingText.textContent = t('processingImage');
}

/**
 * 隐藏加载指示器
 */
function hideLoading() {
    loadingOverlay.style.display = 'none';
}

/**
 * 显示原始图片预览
 * @param {string} imageSrc - 图片的DataURL
 */
function showOriginalImage(imageSrc) {
    originalImage.src = imageSrc;
    originalImage.alt = t('originalImage');
    originalImageTitle.textContent = t('originalImage');
    previewSection.style.display = 'block';
}

/**
 * 显示切分结果
 * @param {Array} images - 切分后的图片数据数组
 */
function showResults(images) {
    cutImages = images;
    
    // 更新结果标题
    resultsTitle.textContent = `${t('resultsTitle')} - ${t('identifiedComponents')} ${images.length} ${t('components')}`;
    
    // 更新下载全部按钮
    downloadAllButton.textContent = `${t('downloadAll')} (${images.length})`;
    
    // 更新结果描述
    resultsDescription.textContent = t('resultsDescription');
    
    // 清空之前的图片
    imagesGrid.innerHTML = '';
    
    // 为每个切分后的图片创建卡片
    images.forEach((imageData, index) => {
        // 创建图片卡片
        const card = document.createElement('div');
        card.className = 'image-card';
        
        // 创建卡片头部
        const cardHeader = document.createElement('div');
        cardHeader.className = 'image-card-header';
        const imageNumber = document.createElement('span');
        imageNumber.className = 'image-number';
        imageNumber.textContent = `${t('component')} #${index + 1}`;
        cardHeader.appendChild(imageNumber);
        
        // 创建图片包装器
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'image-wrapper';
        const img = document.createElement('img');
        img.src = imageData.dataUrl;
        img.alt = `${t('component')} ${index + 1}`;
        img.className = 'cut-image';
        imageWrapper.appendChild(img);
        
        // 创建图片信息
        const imageInfo = document.createElement('div');
        imageInfo.className = 'image-info';
        
        const sizeInfo = document.createElement('p');
        sizeInfo.innerHTML = `<strong>${t('size')}:</strong> ${imageData.width} × ${imageData.height} ${t('pixels')}`;
        
        const positionInfo = document.createElement('p');
        positionInfo.innerHTML = `<strong>${t('position')}:</strong> (${imageData.x}, ${imageData.y})`;
        
        const downloadButton = document.createElement('button');
        downloadButton.className = 'download-button';
        downloadButton.textContent = t('downloadComponent');
        downloadButton.onclick = () => downloadSingleImage(imageData, index);
        
        imageInfo.appendChild(sizeInfo);
        imageInfo.appendChild(positionInfo);
        imageInfo.appendChild(downloadButton);
        
        // 组装卡片
        card.appendChild(cardHeader);
        card.appendChild(imageWrapper);
        card.appendChild(imageInfo);
        
        // 添加到网格
        imagesGrid.appendChild(card);
    });
    
    // 显示结果区域
    resultsSection.style.display = 'block';
}

/**
 * 下载单个图片
 * @param {Object} imageData - 图片数据对象
 * @param {number} index - 图片索引
 */
function downloadSingleImage(imageData, index) {
    const link = document.createElement('a');
    link.download = `cut_image_${index + 1}.png`;
    link.href = imageData.dataUrl;
    link.click();
}

/**
 * 下载所有图片
 */
function downloadAllImages() {
    if (cutImages.length === 0) {
        showError(t('errorNoImages'));
        return;
    }
    
    // 使用延迟下载，避免浏览器阻止多个下载
    cutImages.forEach((imageData, index) => {
        setTimeout(() => {
            const link = document.createElement('a');
            link.download = `cut_image_${index + 1}.png`;
            link.href = imageData.dataUrl;
            link.click();
        }, index * 100);
    });
}

/**
 * 处理文件上传
 * @param {Event} e - 文件输入事件
 */
function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    // 验证文件类型
    if (!file.type.includes('png')) {
        showError(t('errorInvalidFormat'));
        return;
    }

    // 重置状态
    hideError();
    showLoading();
    cutImages = [];
    previewSection.style.display = 'none';
    resultsSection.style.display = 'none';
    uploadLabel.textContent = t('processing');

    // 创建图片对象并加载
    const img = new Image();
    const reader = new FileReader();

    // 文件读取成功后的处理
    reader.onload = async (event) => {
        // 图片加载成功后的处理
        img.onload = async () => {
            try {
                // 显示原始图片
                showOriginalImage(event.target.result);
                
                // 处理图片，检测Alpha通道并切分
                // 这个过程会识别所有独立的UI组件，每个组件会被切分成独立的图片
                const result = await processImage(img);
                
                if (result.length === 0) {
                    showError(t('errorNoComponents'));
                } else {
                    showResults(result);
                }
            } catch (processErr) {
                showError(t('errorProcessFailed') + processErr.message);
                console.error('处理错误：', processErr);
            } finally {
                hideLoading();
                uploadLabel.textContent = t('selectImage');
            }
        };
        
        // 图片加载失败
        img.onerror = () => {
            showError(t('errorLoadFailed'));
            hideLoading();
            uploadLabel.textContent = t('selectImage');
        };
        
        // 设置图片源，触发加载
        img.src = event.target.result;
    };

    // 文件读取失败
    reader.onerror = () => {
        showError(t('errorReadFailed'));
        hideLoading();
        uploadLabel.textContent = t('selectImage');
    };

    // 开始读取文件
    reader.readAsDataURL(file);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化语言切换器
    initLanguageSwitcher();
    
    // 更新页面语言
    updateLanguage();
    
    // 绑定文件上传事件
    fileInput.addEventListener('change', handleFileUpload);
    
    // 绑定下载全部按钮事件
    downloadAllButton.addEventListener('click', downloadAllImages);
});
