
export type UIkitElement = object | HTMLElement | string;
export type UIkitNodes = NodeList | HTMLCollection | UIkitNode;
export type UIkitNode = Node;


export interface UIkitAccordionOptions {
    active?: number;
    animation?: boolean;
    collapsible?: boolean;
    content?: string;
    duration?: number;
    multiple?: boolean;
    targets?: string;
    toggle?: string;
    transition?: string;
}

export interface UIkitAccordionElement {
    toggle(index: string | number | UIkitNode, animate: boolean): void;
}

type Accordion = (element: UIkitElement, options?: UIkitAccordionOptions) => UIkitAccordionElement;

export interface UIkitAlertOptions {
    animation?: boolean | string;
    duration?: number;
    'sel-close'?: string;
}

export interface UIkitAlertElement {
    close(): void;
}

type Alert = (element: UIkitElement, options?: UIkitAlertOptions) => UIkitAlertElement;

export interface UIkitCoverOptions {
    automute?: boolean;
    width?: number;
    height?: number;
}

type Cover = (element: UIkitElement, options?: UIkitCoverOptions) => void;

export interface UIkitDropOptions {
    toggle?: string | boolean;
    pos?: string;
    mode?: string;
    'delay-show'?: number;
    'delay-hide'?: number;
    boundary?: string;
    'boundary-align'?: boolean;
    flip?: boolean | string;
    offset?: number;
    animation?: string;
    duration?: number;
}

export interface UIkitDropElement {
    show(): void;
    hide(): void;
}

type Drop = (element: UIkitElement, options?: UIkitDropOptions) => UIkitDropElement;

export interface UIkitDropdownOptions {
    toggle?: string | boolean;
    pos?: string;
    mode?: string;
    'delay-show'?: number;
    'delay-hide'?: number;
    boundary?: string;
    'boundary-align'?: boolean;
    flip?: boolean | string;
    offset?: number;
    animation?: string;
    duration?: number;
}

export interface UIkitDropdownElement {
    show(): void;
    hide(): void;
}

type Dropdown = (element: UIkitElement, options?: UIkitDropdownOptions) => UIkitDropdownElement;

export interface UIkitFormOptions {
    target?: string | boolean;
}

type FormCustom = (element: UIkitElement, options?: UIkitFormOptions) => void;

export interface UIkitGridOptions {
    margin?: string;
    'first-column'?: string;
    masonry?: boolean;
    parallax?: number;
}

type Grid = (element: UIkitElement, options?: UIkitGridOptions) => void;

export interface UIkitHeightMatchOptions {
    target?: string;
    row?: boolean;
}

type HeightMatch = (element: UIkitElement, options?: UIkitHeightMatchOptions) => void;

export interface UIkitIconOptions {
    icon?: string;
    ratio?: number;
}

type Icon = (element: UIkitElement, options?: UIkitIconOptions) => {
    svg: Promise<any>;
};

export interface UIkitImageOptions {
    dataSrc?: string;
    dataSrcset?: string | boolean;
    sizes?: string | boolean;
    width?: string | boolean;
    height?: string | boolean;
    offsetTop?: string;
    offsetLeft?: string | number;
    target?: string | boolean;
}

type Img = (element: UIkitElement, options?: UIkitImageOptions) => void;

export interface UIkitLeaderOptions {
    fill?: string;
    media?: number | string;
}

type Leader = (element: UIkitElement, options?: UIkitLeaderOptions) => void;

export interface UIkitMarginOptions {
    margin?: string;
    'first-column'?: string;
}

type Margin = (element: UIkitElement, options?: UIkitMarginOptions) => void;

export interface UIkitModalOptions {
    'esc-close'?: boolean;
    'bg-close'?: boolean;
    stack?: boolean;
    container?: string | boolean;
    'cls-page'?: string;
    'cls-panel'?: string;
    'sel-close'?: string;
}

export interface UIkitModalElement {
    show(): void;
    hide(): void;
    $el : HTMLElement;
}

export enum ModalEvents{
    show = 'show',
    beforeshow= 'beforeshow',
    hidden = 'hidden'
}

export interface Modal {
    (element: UIkitElement, options?: UIkitModalOptions): UIkitModalElement;
    alert(message: string, options?: UIkitModalOptions): Promise<void>;
    confirm(message: string, options?: UIkitModalOptions): Promise<void>;
    prompt(content: string, value: string, options?: UIkitModalOptions): Promise<string>;
    dialog(content: string, options?: UIkitModalOptions): Promise<void>;
    labels: {
        ok: string;
        cancel: string;
    };
}

export interface UIkitNavOptions {
    targets?: string;
    toggle?: string;
    content?: string;
    collapsible?: boolean;
    multiple?: boolean;
    transition?: string;
    animation?: string;
    duration?: number;
}

export interface UIkitNavElement {
    index: string | number | UIkitNode;
    animate: boolean;
}

type Nav = (element: UIkitElement, options?: UIkitNavOptions) => UIkitNavElement;

export interface UIkitNavbarOptions {
    align?: string;
    mode?: string;
    'delay-show'?: number;
    'delay-hide'?: number;
    boundary?: string;
    'boundary-align'?: boolean;
    offset?: number;
    dropbar?: boolean;
    'dropbar-mode'?: string;
    duration?: number;
}

type Navbar = (element: UIkitElement, options?: UIkitNavbarOptions) => void;

export interface UIkitOffcanvasOptions {
    mode?: string;
    flip?: boolean;
    overlay?: boolean;
    'esc-close'?: boolean;
    'bg-close'?: boolean;
    container?: string | boolean;
}

export interface UIkitOffcanvasElement {
    show(): void;
    hide(): void;
}

type Offcanvas = (element: UIkitElement, options?: UIkitOffcanvasOptions) => UIkitOffcanvasElement;

export interface UIkitScrollOptions {
    duration?: number;
    offset?: number;
}

export interface UIkitScrollElement {
    scrollTo(el: string | UIkitNode): void;
}

type Scroll = (element: UIkitElement, options?: UIkitScrollOptions) => UIkitScrollElement;

export interface UIkitScrollspyOptions {
    cls?: string;
    hidden?: boolean;
    'offset-top'?: number;
    'offset-left'?: number;
    repeat?: boolean;
    delay?: number;
}

export interface UIkitScrollspyNavOptions {
    cls?: string;
    closest?: string;
    scroll?: boolean;
    overflow?: boolean;
    offset?: number;
}

type Scrollspy = (element: UIkitElement, options?: UIkitScrollspyOptions) => void;
type ScrollspyNav = (element: UIkitElement, options?: UIkitScrollspyNavOptions) => void;

export interface UIkitStickyOptions {
    top?: number | string;
    bottom?: boolean | string;
    offset?: number | string;
    animation?: string | boolean;
    'cls-active'?: string;
    'cls-inactive'?: string;
    'width-element'?: string | boolean;
    'show-on-up'?: boolean;
    media?: number | string | boolean;
    'target-offset'?: boolean | number;
}

type Sticky = (element: UIkitElement, options?: UIkitStickyOptions) => void;

export interface UIkitSvgOptions {
    src?: string;
    'stroke-animation'?: boolean;
}

type Svg = (element: UIkitElement, options?: UIkitSvgOptions) => {
    svg: Promise<any>;
};

export interface UIkitSwiterOptions {
    connect?: string;
    toggle?: string;
    active?: number;
    animation?: string;
    duration?: number;
    swiping?: boolean;
}

export interface UIkitSwitcherElement {
    show(index: string | number | UIkitNode): void;
}

type Switcher = (element: UIkitElement, options?: UIkitSwiterOptions) => UIkitSwitcherElement;

export interface UIkitTabOptions {
    connect?: string;
    toggle?: string;
    active?: number;
    animation?: string;
    duration?: number;
    swiping?: boolean;
    media?: number | string;
}

export interface UIkitTabElement {
    show(index: string | number | UIkitNode): void;
}

type Tab = (element: UIkitElement, options?: UIkitTabOptions) => UIkitTabElement;

export interface UIkitToggleOptions {
    target?: string;
    mode?: string;
    cls?: string;
    media?: number | string;
    animation?: string;
    duration?: number;
    queued?: boolean;
}

export interface UIkitToggleElement {
    toggle(): void;
}

type Toggle = (element: UIkitElement, options?: UIkitToggleOptions) => UIkitToggleElement;

export interface UIkitVideoOptions {
    autoplay?: boolean | string;
    automute?: boolean;
}

type Video = (element: UIkitElement, options?: UIkitVideoOptions) => void;

// Components

export interface UIkitCountdownOptions {
    date?: string | boolean;
}

export interface UIkitCountdownElement {
    start(): void;
    stop(): void;
}

type Countdown = (element: UIkitElement, options?: UIkitCountdownOptions) => UIkitCountdownElement;

export interface UIkitFilterOptions {
    target?: string;
    selActive?: string | boolean;
}

type Filter = (element: UIkitElement, options?: UIkitFilterOptions) => void;

export interface UIkitLightboxPanelOptions {
    animation?: string;
    autoplay?: boolean;
    'autoplay-interval'?: number;
    'pause-on-hover'?: boolean;
    'video-autoplay'?: boolean;
    index?: number;
    velocity?: number;
    preload?: number;
    items?: object[];
    template?: string;
    'delay-controls'?: number;
}

export interface UIkitLightboxPanelElement {
    show(index: number): void;
    hide(): void;
    startAutoplay(): void;
    stopAutoplay(): void;
}

export interface LightboxPanel {
    (optionsOrElement: UIkitLightboxPanelOptions | UIkitElement): UIkitLightboxPanelElement;
}

export interface UIkitLightboxOptions {
    animation?: string;
    autoplay?: number;
    'autoplay-interval'?: number;
    'pause-on-hover'?: boolean;
    'video-autoplay'?: boolean;
    index?: string;
    toggle?: string;
}

export interface UIkitLightboxElement {
    show(index: number): void;
    hide(): void;
}

type Lightbox = (element: UIkitElement, options?: UIkitLightboxOptions) => UIkitLightboxElement;
export interface UIkitNotificationOptions {
    message?: string;
    status?: 'primary' | 'success' | 'warning' | 'danger';
    timeout?: number;
    group?: string;
    pos?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
}

export interface UIkitNotificationElement {
    close(immediate: boolean): void;
}

export interface Notification {
    (options: UIkitNotificationOptions): UIkitNotificationElement;
    (message: string, optionsOrStatus?: UIkitNotificationOptions | string): UIkitNotificationElement;
}

export interface UIkitParallaxOptions {
    easing?: number;
    target?: string;
    viewport?: number;
    media?: number | string;
}

type Parallax = (element: UIkitElement, options?: UIkitParallaxOptions) => void;

export interface UIkitSliderOptions {
    autoplay?: boolean;
    'autoplay-interval'?: number;
    center?: boolean;
    draggable?: boolean;
    easing?: string;
    finite?: boolean;
    index?: number;
    'pause-on-hover'?: boolean;
    sets?: boolean;
    velocity?: number;
}

export interface UIkitSliderElement {
    show(index: number): void;
    startAutoplay(): void;
    stopAutoplay(): void;
}

type Slider = (element: UIkitElement, options?: UIkitSliderOptions) => UIkitSliderElement;

export interface UIkitSlideshowOptions {
    animation?: string;
    autoplay?: boolean;
    'autoplay-interval'?: number;
    draggable?: boolean;
    easing?: string;
    finite?: boolean;
    'pause-on-hover'?: boolean;
    index?: number;
    velocity?: number;
    ratio?: string | number;
    'min-height'?: boolean | number;
    'max-height'?: boolean | number;
}

export interface UIkitSlidershowElement {
    show(index: number): void;
    startAutoplay(): void;
    stopAutoplay(): void;
}

type Slidershow = (element: UIkitElement, options?: UIkitSlideshowOptions) => UIkitSlidershowElement;

export interface UIkitSortableOptions {
    group?: string;
    animation?: number;
    threshold?: number;
    'cls-item'?: string;
    'cls-placeholder'?: string;
    'cls-drag'?: string;
    'cls-drag-state'?: string;
    'cls-base'?: string;
    'cls-no-drag'?: string;
    'cls-empty'?: string;
    'cls-custom': string;
    handle?: string;
}

type Sortable = (element: UIkitElement, options?: UIkitSortableOptions) => void;

export interface UIkitTooltipOptions {
    title?: string;
    pos?: string;
    offset?: number | boolean;
    animation?: string;
    duration?: number;
    delay?: number;
    cls?: string;
}

export interface UIkitTooltipElement {
    show(): void;
    hide(): void;
}

type Tooltip = (element: UIkitElement, options?: UIkitTooltipOptions) => UIkitTooltipElement;

export interface UIkitUploadOptions {
    url?: string;
    multiple?: boolean;
    name?: string;
    params?: object;
    allow?: string | boolean;
    mime?: string | boolean;
    concurrent?: number;
    type?: string;
    method?: string;
    'msg-invalid-mime'?: string;
    'msg-invalid-name'?: string;
    'cls-dragover'?: string;
    abort?: object;
    'before-all'?: object;
    'before-send'?: object;
    complete?: object;
    'complete-all'?: object;
    error?: object;
    load?: object;
    'load-end'?: object;
    'load-start'?: object;
    progress?: object;
    fail?: object;
}

type Upload = (element: UIkitElement, options?: UIkitUploadOptions) => void;
export interface UIkit {
    util: any;
    component: any;
    data: string;
    prefix: string;
    options: any;
    version: string;
    use: any;
    mixin: any;
    extend: any;
    update: any;

    // Core
    accordion: Accordion;
    alert: Alert;
    cover: Cover;
    drop: Drop;
    dropdown: Dropdown;
    formCustom: FormCustom;
    grid: Grid;
    heightMatch: HeightMatch;
    icon: Icon;
    image: Img;
    leader: Leader;
    margin: Margin;
    modal: Modal;
    nav: Nav;
    navbar: Navbar;
    offcanvas: Offcanvas;
    scroll: Scroll;
    scrollspy: Scrollspy;
    scrollspyNav: ScrollspyNav;
    sticky: Sticky;
    svg: Svg;
    switcher: Switcher;
    tab: Tab;
    toggle: Toggle;
    video: Video;

    // Components
    notification: Notification;
    countdown: Countdown;
    filter: Filter;
    lightbox: Lightbox;
    lightboxPanel: LightboxPanel;
    parallax: Parallax;
    slider: Slider;
    slideshow: Slidershow;
    sortable: Sortable;
    tooltip: Tooltip;
    upload: Upload;
}

