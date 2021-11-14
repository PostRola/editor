export type ImageSize = 'standard' | 'wide' | 'fullwidth';

export interface ImageAttrs {
  src: string;
  caption: string;
  alt: string;
  size: ImageSize;
}

export interface ParagraphNode {
  type: 'paragraph';
  content?: any[];
}

export interface HeadingNode {
  type: 'heading';
  attrs: {
    level: 2 | 3;
  };
  content: any[];
}

export interface ListItemNode {
  type: 'listItem';
  content: any[];
}

export interface BulletListNode {
  type: 'bulletList';
  content: ListItemNode[];
}

export interface OrderedListNode {
  type: 'orderedList';
  content: ListItemNode[];
}

export interface ChidiImageNode {
  type: 'chidi-image',
  attrs: ImageAttrs;
}

export interface BlockQuote {
  type: 'blockquote';
  content: ParagraphNode[];
}

export type ChidiNodes =
  | ParagraphNode
  | HeadingNode
  | BulletListNode
  | OrderedListNode
  | ChidiImageNode;


export interface ChidiDoc {
  type: 'doc';
  content: ChidiNodes[];
}

export interface BasicChidiDoc {
  type: 'doc';
  content: ParagraphNode;
}
