export default function useRenderContent(results) {
  if (results.length > 0) {
    return results.map((block) => {
      switch (block.type) {
        case 'paragraph':
          return (
            <p key={block.id}>
              {block.paragraph.rich_text.map((richtext, i) =>
                richtext.text.link ? (
                  <a
                    className="underline"
                    key={i}
                    href={richtext.text.link.url}
                    target="_blank"
                  >
                    {richtext.plain_text}
                  </a>
                ) : (
                  richtext.plain_text
                )
              )}
            </p>
          )

        case 'image':
          return (
            <img
              key={block.id}
              src={block.image.external.url}
              alt={block.image.caption[0]?.plain_text}
            />
          )

        case 'embed':
          return (
            <img
              key={block.id}
              src={block.embed.url}
              alt={block.embed.caption[0].plain_text}
            />
          )

        default:
          return null
      }
    })
  } else {
    return <div>No Data loaded</div>
  }
}
