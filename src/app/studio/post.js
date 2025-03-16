const post = {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Título',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title', maxLength: 96 },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'author',
        title: 'Autor',
        type: 'reference',
        to: [{ type: 'author' }],
      },
      {
        name: 'categories',
        title: 'Categorias',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'category' }] }],
      },
      {
        name: 'mainImage',
        title: 'Imagem Principal',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name: 'publishedAt',
        title: 'Publicado em',
        type: 'datetime',
      },
      {
        name: 'body',
        title: 'Conteúdo',
        type: 'blockContent',
      },
    ],
  }

export default post;
  