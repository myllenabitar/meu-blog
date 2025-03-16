export default {
    name: 'author',
    title: 'Autor',
    type: 'document',
    fields: [
      { name: 'name', title: 'Nome', type: 'string' },
      { name: 'bio', title: 'Biografia', type: 'text' },
      {
        name: 'image',
        title: 'Imagem',
        type: 'image',
        options: { hotspot: true },
      },
    ],
  }
  