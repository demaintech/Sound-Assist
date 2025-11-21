import CardSection from "@/components/CardSection"
import Discord from "@/components/Discord"
import FAQ from "@/components/FAQ"
import Hero from "@/components/Hero"



const page = () => {
  return (
    <main className="w-full h-auto">

      {/* Hero Section */}
      <div className="w-full min-h-screen" id="home">
        <Hero />
      </div>

      {/* Card Section */}
      <div className="w-full" id="about">
        <CardSection />
      </div>

      {/* Assistance Section */}
      <div className="w-full" id="assistance">
        <FAQ />
      </div>
      
    {/* Discord */}
      <div className="w-full" id="discord">
        <Discord />
      </div>

    </main>
  )
}

export default page