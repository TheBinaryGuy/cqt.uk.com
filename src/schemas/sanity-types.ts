export interface Course {
    _id: string;
    body?: Body[];
    booking_page?: string;
    cost?: string;
    duration?: string;
    refresher_duration?: string;
    excerpt: string;
    main_image: Image;
    main_category: Category;
    notes?: Note[];
    slug: Slug;
    title: string;
    testimonial?: Testimonial;
}

export interface CoursesPageQuery {
    _id: string;
    slug: Slug;
    title: string;
    description?: string;
    categories?: Category[];
}

export interface Slug {
    current: string;
}

export interface Testimonial {
    _id: string;
    body: string;
    name: string;
    role: string;
    image: Image;
}

interface Body {
    _key: string;
    _type: string;
    children?: Child[];
    markDefs?: any[];
    style: string;
    level?: number;
    listItem?: string;
}

interface Child {
    _key: string;
    _type: string;
    marks: string[];
    text: string;
}

interface Image {
    asset: Asset;
}

interface Asset {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    assetId: string;
    extension: string;
    metadata: Metadata;
    mimeType: string;
    originalFilename: string;
    path: string;
    sha1hash: string;
    size: number;
    uploadId: string;
    url: string;
}

interface Metadata {
    _type: string;
    blurHash: string;
    dimensions: Dimensions;
    hasAlpha: boolean;
    isOpaque: boolean;
    lqip: string;
    palette: Palette;
}

interface Dimensions {
    _type: string;
    aspectRatio: number;
    height: number;
    width: number;
}

interface Palette {
    _type: string;
    darkMuted: DarkMuted;
    darkVibrant: DarkMuted;
    dominant: DarkMuted;
    lightMuted: DarkMuted;
    lightVibrant: DarkMuted;
    muted: DarkMuted;
    vibrant: DarkMuted;
}

interface DarkMuted {
    _type: string;
    background: string;
    foreground: string;
    population: number;
    title: string;
}

interface Category {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    slug: Slug;
    title: string;
    placement_right: boolean;
    courses?: Course[];
}

interface Note {
    _key: string;
    _type: string;
    children: Child[];
    markDefs: any[];
    style: string;
}
