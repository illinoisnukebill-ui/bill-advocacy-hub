import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Users, FileText, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import NuclearButton from "@/components/NuclearButton";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-civic-navy to-civic-blue text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Citizens' Digital Rights Act of 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Protecting privacy, ensuring transparency, and empowering every citizen in the digital age
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/bill">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <FileText className="mr-2 h-5 w-5" />
                  Read Full Bill
                </Button>
              </Link>
              <Link to="/support">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Support This Bill
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              What This Bill Does
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle>Data Privacy Rights</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Establishes fundamental rights to control personal data, including the right to access, 
                    delete, and port your information across platforms.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-civic-blue rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle>Algorithm Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Requires companies to disclose how algorithms make decisions that affect citizens' 
                    lives, from job applications to loan approvals.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle>Digital Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Creates enforcement mechanisms and penalties for violations, ensuring companies 
                    prioritize citizen rights over profits.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="py-16 bg-civic-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Key Provisions
            </h2>
            <div className="space-y-4">
              {[
                "Right to know what data is collected and how it's used",
                "Right to delete personal information from company databases",
                "Mandatory data breach notifications within 72 hours",
                "Opt-in consent required for data sharing with third parties",
                "Independent oversight committee with enforcement authority",
                "Civil penalties up to $50 million for willful violations",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-card-foreground text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Support Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              How You Can Support
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Your voice matters. Here's how you can help make this bill a reality:
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Contact Your Representatives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Let your elected officials know you support digital rights protections.
                  </p>
                  <Link to="/support">
                    <Button className="w-full">Find Contact Info</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Share2 className="h-5 w-5" />
                    Spread the Word
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Share this bill on social media and talk to friends and family.
                  </p>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Share Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nuclear Button Section */}
      <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-500">
              🚨 Classified Section 🚨
            </h2>
            <p className="text-yellow-500 text-lg">
              This interactive demo shows what happens when technology operates without oversight.
              <br />
              <span className="text-sm text-muted-foreground">
                (It's just for fun - no actual danger involved!)
              </span>
            </p>
          </div>
          <NuclearButton />
        </div>
      </section>

      {/* Social Media Feed */}
      <section className="py-16 bg-civic-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Join the Movement
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Follow our campaign on Instagram for updates, events, and ways to get involved
            </p>
            <div className="bg-card rounded-lg p-8 text-center">
              <div className="mb-6">
                <Share2 className="h-16 w-16 mx-auto text-primary mb-4" />
                <p className="text-xl font-semibold text-card-foreground mb-2">
                  @CitizensDigitalRights
                </p>
                <p className="text-muted-foreground">
                  Instagram feed would appear here. To embed your Instagram feed, you'll need to use 
                  Instagram's embed code or a third-party service like SnapWidget or EmbedSocial.
                </p>
              </div>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Follow on Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 Citizens' Digital Rights Campaign</p>
          <p className="text-sm opacity-75">
            A grassroots movement for digital privacy and transparency
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
