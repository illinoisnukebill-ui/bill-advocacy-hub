import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";
import { useState } from "react";

export default function BillText() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground"></h1>
            <p className="text-xl text-muted-foreground mb-6">
              H.R. 2025 - 119th Congress (2025-2026)
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
              <Button variant="outline" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="w-full h-screen border rounded-lg overflow-hidden relative">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-primary border-t-transparent"></div>
              </div>
            )}

            <iframe
              src="/ThermonuclearEnergyGenerationDevice_Draft1.pdf"
              className="w-full h-full"
              title="PDF Viewer"
              onLoad={() => setLoading(false)}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 Nuke Campaign</p>
          <p className="text-sm opacity-75">
            A grassroots movement for Illinois Protection
          </p>
        </div>
      </footer>
    </div>
  );
}


export default BillText;

