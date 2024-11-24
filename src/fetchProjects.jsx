import { createClient } from 'contentful'
import { useState, useEffect } from 'react'

const client = createClient({
  space: '4y08ck57x07t',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
})

export const useGlobalHook = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projektai' })
      const data = response.items.map((item) => {
        const { title, url, image } = item.fields
        const { id } = item.sys
        const img = image?.fields?.file?.url
        return { title, url, id, img }
      })
      setProjects(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return { loading, projects }
}
