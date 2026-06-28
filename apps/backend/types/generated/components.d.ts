import type { Schema, Struct } from '@strapi/strapi';

export interface NoticeSharedNotice extends Struct.ComponentSchema {
  collectionName: 'components_notice_shared_notices';
  info: {
    displayName: 'shared.notice';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['suspension', 'comunicado', 'noticia']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'notice.shared-notice': NoticeSharedNotice;
    }
  }
}
