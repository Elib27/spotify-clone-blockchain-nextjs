import getCategories from '../../lib/spotify/getCategories'
import getUserInformations from '../../lib/spotify/getUserInformations'

export default async function handler(req, res) {

  const response = await getCategories()
  const userInformations = await getUserInformations()

  const categories = response.map(category => ({
    name: category.name,
    id: category.id,
    icon: {
      url: category.icons[0].url,
      height: category.icons[0].height,
      width: category.icons[0].width
    }
  }))

  res.status(200).json({ userInformations })
} 