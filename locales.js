/**
 * 多语言翻译文件
 * 包含中文、英文、日文、法语、西班牙语、韩语
 */

// 语言配置对象
const translations = {
    'zh-CN': {
        // 标题和描述
        title: 'PNG切分工具',
        subtitle: '将带Alpha通道的PNG图片切分成多个矩形图片',
        
        // 按钮文本
        selectImage: '选择PNG图片',
        processing: '处理中...',
        downloadAll: '下载全部',
        downloadComponent: '下载此组件',
        
        // 错误信息
        errorInvalidFormat: '请上传PNG格式的图片！',
        errorNoComponents: '未能识别到任何UI组件，请确保图片包含非透明区域',
        errorProcessFailed: '处理图片时出错: ',
        errorLoadFailed: '图片加载失败，请检查文件是否损坏',
        errorReadFailed: '文件读取失败，请重试',
        errorNoImages: '没有可下载的图片！',
        
        // 预览和结果
        originalImage: '原始图片',
        resultsTitle: '切分结果',
        resultsDescription: '已识别并切分以下独立的UI组件，每个组件都被切分成独立的PNG图片：',
        identifiedComponents: '已识别',
        components: '个组件',
        
        // 图片信息
        component: '组件',
        size: '尺寸',
        position: '位置',
        pixels: '像素',
        
        // 加载提示
        processingImage: '正在处理图片...',
    },
    
    'en-US': {
        // Title and description
        title: 'PNG Splitter Tool',
        subtitle: 'Split PNG images with Alpha channel into multiple rectangular images',
        
        // Button text
        selectImage: 'Select PNG Image',
        processing: 'Processing...',
        downloadAll: 'Download All',
        downloadComponent: 'Download Component',
        
        // Error messages
        errorInvalidFormat: 'Please upload a PNG format image!',
        errorNoComponents: 'No UI components detected! Please ensure the image contains non-transparent areas.',
        errorProcessFailed: 'Image processing failed: ',
        errorLoadFailed: 'Image loading failed, please check if the file is corrupted',
        errorReadFailed: 'File read failed',
        errorNoImages: 'No images to download!',
        
        // Preview and results
        originalImage: 'Original Image',
        resultsTitle: 'Split Results',
        resultsDescription: 'Each UI component has been automatically identified and split into independent PNG images with transparent backgrounds.',
        identifiedComponents: 'Identified',
        components: 'independent UI components',
        
        // Image information
        component: 'Component',
        size: 'Size',
        position: 'Position',
        pixels: 'pixels',
        
        // Loading message
        processingImage: 'Processing image...',
    },
    
    'ja-JP': {
        // タイトルと説明
        title: 'PNG分割ツール',
        subtitle: 'Alphaチャンネル付きPNG画像を複数の矩形画像に分割',
        
        // ボタンテキスト
        selectImage: 'PNG画像を選択',
        processing: '処理中...',
        downloadAll: 'すべてダウンロード',
        downloadComponent: 'コンポーネントをダウンロード',
        
        // エラーメッセージ
        errorInvalidFormat: 'PNG形式の画像をアップロードしてください！',
        errorNoComponents: 'UIコンポーネントが検出されませんでした！画像に非透明領域が含まれていることを確認してください。',
        errorProcessFailed: '画像処理に失敗しました：',
        errorLoadFailed: '画像の読み込みに失敗しました。ファイルが破損していないか確認してください',
        errorReadFailed: 'ファイルの読み込みに失敗しました',
        errorNoImages: 'ダウンロードできる画像がありません！',
        
        // プレビューと結果
        originalImage: '元の画像',
        resultsTitle: '分割結果',
        resultsDescription: '各UIコンポーネントは自動的に識別され、透明な背景を持つ独立したPNG画像に分割されました。',
        identifiedComponents: '識別された',
        components: '個の独立したUIコンポーネント',
        
        // 画像情報
        component: 'コンポーネント',
        size: 'サイズ',
        position: '位置',
        pixels: 'ピクセル',
        
        // 読み込みメッセージ
        processingImage: '画像を処理中...',
    },
    
    'fr-FR': {
        // Titre et description
        title: 'Outil de Division PNG',
        subtitle: 'Diviser les images PNG avec canal Alpha en plusieurs images rectangulaires',
        
        // Texte des boutons
        selectImage: 'Sélectionner une Image PNG',
        processing: 'Traitement...',
        downloadAll: 'Tout Télécharger',
        downloadComponent: 'Télécharger le Composant',
        
        // Messages d'erreur
        errorInvalidFormat: 'Veuillez télécharger une image au format PNG !',
        errorNoComponents: 'Aucun composant UI détecté ! Veuillez vous assurer que l\'image contient des zones non transparentes.',
        errorProcessFailed: 'Échec du traitement de l\'image : ',
        errorLoadFailed: 'Échec du chargement de l\'image, veuillez vérifier si le fichier est corrompu',
        errorReadFailed: 'Échec de la lecture du fichier',
        errorNoImages: 'Aucune image à télécharger !',
        
        // Aperçu et résultats
        originalImage: 'Image Originale',
        resultsTitle: 'Résultats de Division',
        resultsDescription: 'Chaque composant UI a été automatiquement identifié et divisé en images PNG indépendantes avec des arrière-plans transparents.',
        identifiedComponents: 'Identifiés',
        components: 'composants UI indépendants',
        
        // Informations sur l'image
        component: 'Composant',
        size: 'Taille',
        position: 'Position',
        pixels: 'pixels',
        
        // Message de chargement
        processingImage: 'Traitement de l\'image...',
    },
    
    'es-ES': {
        // Título y descripción
        title: 'Herramienta de División PNG',
        subtitle: 'Dividir imágenes PNG con canal Alpha en múltiples imágenes rectangulares',
        
        // Texto de botones
        selectImage: 'Seleccionar Imagen PNG',
        processing: 'Procesando...',
        downloadAll: 'Descargar Todo',
        downloadComponent: 'Descargar Componente',
        
        // Mensajes de error
        errorInvalidFormat: '¡Por favor sube una imagen en formato PNG!',
        errorNoComponents: '¡No se detectaron componentes de UI! Por favor asegúrate de que la imagen contenga áreas no transparentes.',
        errorProcessFailed: 'Error al procesar la imagen: ',
        errorLoadFailed: 'Error al cargar la imagen, por favor verifica si el archivo está dañado',
        errorReadFailed: 'Error al leer el archivo',
        errorNoImages: '¡No hay imágenes para descargar!',
        
        // Vista previa y resultados
        originalImage: 'Imagen Original',
        resultsTitle: 'Resultados de División',
        resultsDescription: 'Cada componente de UI ha sido identificado automáticamente y dividido en imágenes PNG independientes con fondos transparentes.',
        identifiedComponents: 'Identificados',
        components: 'componentes de UI independientes',
        
        // Información de imagen
        component: 'Componente',
        size: 'Tamaño',
        position: 'Posición',
        pixels: 'píxeles',
        
        // Mensaje de carga
        processingImage: 'Procesando imagen...',
    },
    
    'ko-KR': {
        // 제목과 설명
        title: 'PNG 분할 도구',
        subtitle: 'Alpha 채널이 있는 PNG 이미지를 여러 개의 직사각형 이미지로 분할',
        
        // 버튼 텍스트
        selectImage: 'PNG 이미지 선택',
        processing: '처리 중...',
        downloadAll: '모두 다운로드',
        downloadComponent: '컴포넌트 다운로드',
        
        // 오류 메시지
        errorInvalidFormat: 'PNG 형식의 이미지를 업로드해주세요!',
        errorNoComponents: 'UI 컴포넌트가 감지되지 않았습니다! 이미지에 불투명 영역이 포함되어 있는지 확인하세요.',
        errorProcessFailed: '이미지 처리 실패: ',
        errorLoadFailed: '이미지 로드 실패, 파일이 손상되었는지 확인하세요',
        errorReadFailed: '파일 읽기 실패',
        errorNoImages: '다운로드할 이미지가 없습니다!',
        
        // 미리보기 및 결과
        originalImage: '원본 이미지',
        resultsTitle: '분할 결과',
        resultsDescription: '각 UI 컴포넌트가 자동으로 식별되어 투명한 배경을 가진 독립적인 PNG 이미지로 분할되었습니다.',
        identifiedComponents: '식별된',
        components: '개의 독립적인 UI 컴포넌트',
        
        // 이미지 정보
        component: '컴포넌트',
        size: '크기',
        position: '위치',
        pixels: '픽셀',
        
        // 로딩 메시지
        processingImage: '이미지 처리 중...',
    }
};

// 语言配置信息（用于语言切换器）
const languageConfig = {
    'zh-CN': { name: '中文', flag: '🇨🇳', code: 'ZH' },
    'en-US': { name: 'English', flag: '🇺🇸', code: 'EN' },
    'ja-JP': { name: '日本語', flag: '🇯🇵', code: 'JA' },
    'fr-FR': { name: 'Français', flag: '🇫🇷', code: 'FR' },
    'es-ES': { name: 'Español', flag: '🇪🇸', code: 'ES' },
    'ko-KR': { name: '한국어', flag: '🇰🇷', code: 'KO' }
};

