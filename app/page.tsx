import Image from 'next/image'
import { PrismaClient } from '@prisma/client'

export default function Home() {

  const prisma = new PrismaClient()

  async function main() {
    const post = await prisma.post.update({
      where: { id: 1 },
      data: { published: true },
    })
    console.log(post)
  }
  
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World!!
    </main>
  )
}
