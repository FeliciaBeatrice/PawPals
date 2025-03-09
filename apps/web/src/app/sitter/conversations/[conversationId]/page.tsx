import Header from "@/components/sitter/Header";


export default function Page({ params }: { params: { conversationId: string } }) {
  return (
    <main className="min-h-screen bg-gradient-to-r from-pastelBlue to-pastelPink flex flex-col">
      <Header />
    </main>
  );
}
