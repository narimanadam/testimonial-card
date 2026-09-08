import TestimonialCard from "./components/testimonial-card";

export default function Home() {
  return (
    <main className="flex min-h-screen items-start justify-center bg-linear-to-b from-gray-50 to-[#d2d6db] px-6 py-[200px]">
      <TestimonialCard
        name="Sarah Dole"
        handle="@sarahdole"
        quote="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
      />
    </main>
  );
}
