import React from 'react'
import Navbar from '../../components/navbar'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { Sparkles, Users } from 'lucide-react'

const Landing_page = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className='bg-gradient-to-br from-[#022c23] via-[#004031] to-[#000000] text-white p-8 flex flex-row'>
          <div className='my-12'>
            <Badge className='bg-green-300 text-black' >
              <Sparkles />
              New Features Available</Badge>
            <h1 className='text-6xl font-bold'>Master Any Skill with Personalized Learning Paths</h1>
            <h3 className='text-xl my-4 text-decoration-color: var(--color-gray-100)'>Create custom learning paths, track your daily progress, and build consistent habits with SkillTrail.</h3>
            <div className='flex gap-4 my-4'>
              <Button>
                Get Started
              </Button>
              <Button>
                Explore Learning Paths
              </Button>
            </div>
          </div>
          <Card className='border w-90 h-60 mr-60 bg-transparent'>

          </Card>

        </section>
        <section className='bg-[#02231e] text-white p-8 flex flex-col'>
          <div className='flex flex-col justify-center items-center w-full'>
            <h1 className='text-5xl font-bold'>
              How SkillTrail Works
            </h1>
            <h3 className='text-xl my-4 text-decoration-color: var(--color-gray-100)'>
              A simple yet powerful way to track your learning journey and build consistent habits.
            </h3>
          </div>
          <div className='flex flex-row gap-6 justify-center items-center w-full'>
            <Card className='border w-90 h-60 bg-transparent'>

            </Card>
            <Card className='border w-90 h-60  bg-transparent'>

            </Card>
            <Card className='border w-90 h-60 bg-transparent'>

            </Card>
          </div>

        </section>
        <section className='bg-[#293f3c] text-white p-8 flex flex-col'>
          <div className='flex flex-row justify-between gap-x-20 py-20 px-20'>
            <div>
              <Card className='border w-90 h-60 bg-transparent'>

              </Card>
            </div>
            <div className=''>
              <Badge className='bg-green-700 text-black' >
                <Users />
                Join 10,000+ Learners
              </Badge>
              <h2 className='text-5xl font-bold'>Discover Popular Learning Paths</h2>
              <h3 className='text-wrap text-xl my-4 text-decoration-color: var(--color-gray-100)'>
                Browse through our collection of community-created learning paths. Find the perfect path for your learning goals or create your own.
              </h3>
              <div className='flex gap-4 '>
                <Badge className='bg-[#7a7777] text-white ' >
                  Web Development</Badge>
                <Badge className='bg-[#7a7777] text-white' >
                  Data Science</Badge>
                <Badge className='bg-[#7a7777] text-white' >
                  UI/UX Design</Badge>
                <Badge className='bg-[#7a7777] text-white' >
                  Machine Learning</Badge>
              </div>
              <Button className='mt-10'>
                Explore All Paths
              </Button>
            </div>
          </div>


        </section>
      </main>

    </>
  )
}

export default Landing_page
