import React from 'react'
import Navbar from '../../components/navbar'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { Sparkles } from 'lucide-react'

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
            <h1 className='text-6xl font-bold'>
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
      </main>

    </>
  )
}

export default Landing_page
