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
              Your voice can make a difference. Take action today to protect digital rights for all.
            </p>
          </div>

          {/* Main CTA - Google Form */}
          <Card className="mb-8 border-2 border-primary shadow-lg">
            <CardHeader className="bg-gradient-to-br from-primary to-civic-blue text-primary-foreground">
              <CardTitle className="text-2xl">Sign the Petition</CardTitle>
              <CardDescription className="text-primary-foreground/90">
                Add your name to show your support for digital rights protections
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-6 text-card-foreground">
                Join thousands of citizens calling for comprehensive digital privacy protections. 
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
                Note: Replace the Google Forms link above with your actual petition form URL
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
                    Send an email or letter to your elected officials
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground mb-4">
                    Let your senators and representatives know you support this bill. Personal messages 
                    from constituents have real impact.
                  </p>
                  <a
                    href="https://www.congress.gov/members/find-your-member"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Find Your Representatives
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-civic-blue rounded-lg flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle>Call Congress</CardTitle>
                  <CardDescription>
                    Make your voice heard with a phone call
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground mb-4">
                    Phone calls are one of the most effective ways to communicate with legislators. 
                    Keep it brief and be polite.
                  </p>
                  <a href="tel:202-224-3121">
                    <Button variant="outline" className="w-full gap-2">
                      <Phone className="h-4 w-4" />
                      Capitol Switchboard: (202) 224-3121
                    </Button>
                  </a>
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
                        const text = "Support the Citizens' Digital Rights Act! Protect privacy and digital rights for all. #DigitalRights #Privacy";
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
                    about digital rights and privacy.
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

          {/* Sample Message */}
          <Card className="bg-civic-light">
            <CardHeader>
              <CardTitle>Sample Message to Representatives</CardTitle>
              <CardDescription>
                Use this template when contacting your elected officials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-card p-6 rounded-lg">
                <p className="text-card-foreground italic leading-relaxed">
                  "Dear [Representative/Senator Name],
                  <br /><br />
                  As your constituent, I am writing to urge you to support the Citizens' Digital Rights 
                  Act of 2025. This legislation would establish much-needed protections for personal privacy 
                  in the digital age, ensure transparency in algorithmic decision-making, and create 
                  meaningful enforcement mechanisms.
                  <br /><br />
                  In an era where our personal data is constantly collected and used in ways we often don't 
                  understand or consent to, it is critical that Congress act to protect citizens' fundamental 
                  rights. This bill represents a balanced approach that protects individual privacy while 
                  allowing legitimate business operations to continue.
                  <br /><br />
                  I strongly encourage you to co-sponsor and vote for this important legislation.
                  <br /><br />
                  Thank you for your consideration.
                  <br /><br />
                  Sincerely,<br />
                  [Your Name]<br />
                  [Your Address]<br />
                  [Your City, State ZIP]"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-12">
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

export default Support;
