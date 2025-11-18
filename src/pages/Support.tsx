import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Mail, Phone, MessageSquare, Share2 } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Support the Citizens' Digital Rights Act
            </h1>
            <p className="text-xl text-muted-foreground">
              Your voice can make a difference. Take action today to protect Illinois Citizens.
            </p>
          </div>

          {/* Main CTA - Google Form */}
          <Card className="mb-8 border-2 border-primary shadow-lg">
            <CardHeader className="bg-gradient-to-br from-primary to-civic-blue text-primary-foreground">
              <CardTitle className="text-2xl">Sign the Petition</CardTitle>
              <CardDescription className="text-primary-foreground/90">
                Add your name to show your support for Nuclear Warfare.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-6 text-card-foreground">
                Join thousands of citizens calling for comprehensive nuclear protection.
                Your signature will be delivered to Congress to demonstrate widespread support for this legislation.
              </p>
              <a
                href="https://docs.google.com/forms"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button size="lg" className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                  <ExternalLink className="h-5 w-5" />
                  Sign the Petition via Google Forms
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-4">
              </p>
            </CardContent>
          </Card>

          {/* Additional Ways to Support */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground text-center">
              Other Ways to Help
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle>Contact Your Representatives</CardTitle>
                  <CardDescription>
                    Send an email or letter to us!!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground mb-4">
                    Let us know we have your support.
                  </p>
      
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <Share2 className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle>Spread the Word</CardTitle>
                  <CardDescription>
                    Share on social media
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground mb-4">
                    Help raise awareness by sharing this campaign with your friends, family, and followers 
                    on social media platforms.
                  </p>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        const url = window.location.origin;
                        const text = "give illinois a nuke cause it'd be really sweet #nukes #YAG";
                        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
                      }}
                    >
                      Share on Twitter/X
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        const url = window.location.origin;
                        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                      }}
                    >
                      Share on Facebook
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-civic-navy rounded-lg flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle>Join the Conversation</CardTitle>
                  <CardDescription>
                    Engage with the community
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground mb-4">
                    Follow us on social media, attend virtual town halls, and participate in discussions 
                    about nuclear assurance.
                  </p>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                      Follow on Instagram
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>


      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 Nuke Campaign</p>
          <p className="text-sm opacity-75">
            A grassroots movement for putting safety back in the hands of the people.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Support;
