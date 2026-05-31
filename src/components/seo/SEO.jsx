import { Helmet } from 'react-helmet-async'
import { profile } from '../../data/profile'

function SEO({ title, description, path = '/', image, url, keywords, ogType = 'website' }) {
  const resolvedKeywords = keywords ?? profile.seo.keywords
  const keywordString = Array.isArray(resolvedKeywords)
    ? resolvedKeywords.join(', ')
    : resolvedKeywords
  const pageUrl = url ?? `${profile.seo.url}${path}`
  const imagePath = image ?? profile.seo.image
  const pageImage =
    imagePath && imagePath.trim().length > 0
      ? imagePath.startsWith('http')
        ? imagePath
        : `${profile.seo.url}${imagePath}`
      : ''

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={pageUrl} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordString} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageUrl} />
      <meta name="twitter:card" content={pageImage ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {pageImage ? <meta property="og:image" content={pageImage} /> : null}
      {pageImage ? <meta name="twitter:image" content={pageImage} /> : null}
    </Helmet>
  )
}

export default SEO
