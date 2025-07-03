import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  BookOpen,
  Package,
  FileText,
  BarChart3,
  Grid3x3,
  Code,
  Target,
  ImageIcon,
  Scissors,
  Layers,
  HelpCircle,
  Download,
  Play,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">MASMR</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#vignettes" className="text-gray-600 hover:text-gray-900 transition-colors">
              Vignettes
            </a>
            <a href="#documentation" className="text-gray-600 hover:text-gray-900 transition-colors">
              Documentation
            </a>
            <a href="#installation" className="text-gray-600 hover:text-gray-900 transition-colors">
              Installation
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="flex items-center space-x-2 bg-transparent" asChild>
              <a href="https://eugenekwaneuromics.github.io/masmr/" target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-4 h-4" />
                <span>Documentation</span>
              </a>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2 bg-transparent" asChild>
              <a href="https://github.com/eugenekwaNeuromics/masmr/" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4">
                Open Source • R Package
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">MASMR</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                the first R-native custom image processing pipeline for MERFISH
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/masmr-hero-image.png"
                alt="MASMR visualization showing the package's capabilities for MERFISH image processing"
                className="max-w-full h-auto rounded-xl shadow-lg"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for advanced MERFISH image processing and analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>R-based</CardTitle>
                <CardDescription>
                  Native R implementation designed specifically for the R ecosystem and workflows
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>User Friendly Syntax</CardTitle>
                <CardDescription>
                  Intuitive and readable code structure that makes complex image processing accessible
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Advanced Quality Control Plots</CardTitle>
                <CardDescription>
                  Comprehensive visualization tools for monitoring and validating analysis results
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Grid3x3 className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Modular Image Processing</CardTitle>
                <CardDescription>
                  Flexible pipeline architecture allowing custom combinations of processing modules
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Vignettes Section */}
      <section id="vignettes" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vignettes</h2>
          <p className="text-lg text-gray-600 mb-8">Tutorials showing start to end custom image pipeline in Midbrain-like Organoids (MLOs)</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-left hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <a href="/vignettes/getting-ready.html" target="_blank" rel="noreferrer">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>0: Getting Ready</span>
                  </CardTitle>
                  <CardDescription>
                    Essential setup and preparation steps before starting your MERFISH analysis
                  </CardDescription>
                </CardHeader>
              </a>
            </Card>
            <Card className="text-left hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <a href="/vignettes/spot-calling.nb.html" target="_blank" rel="noreferrer">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="w-5 h-5" />
                    <span>1: Spot Calling</span>
                  </CardTitle>
                  <CardDescription>
                    Complete walkthrough of RNA spot detection and quantification workflows
                  </CardDescription>
                </CardHeader>
              </a>
            </Card>
            <Card className="text-left hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <a href="/vignettes/cell-segmentation.html" target="_blank" rel="noreferrer">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Scissors className="w-5 h-5" />
                    <span>2: Cell Segmentation</span>
                  </CardTitle>
                  <CardDescription>
                    Step-by-step guide to cell boundary detection, and boundary dillation
                  </CardDescription>
                </CardHeader>
              </a>
            </Card>
            <Card className="text-left hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <a href="/vignettes/stitching.html" target="_blank" rel="noreferrer">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Grid3x3 className="w-5 h-5" />
                    <span>3: Stitching</span>
                  </CardTitle>
                  <CardDescription>Correcting for imaging overlap between adjacent fields-of-view (FOVs)</CardDescription>
                </CardHeader>
              </a>
            </Card>
            <Card className="text-left hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <a href="/vignettes/synthesis.html" target="_blank" rel="noreferrer">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Layers className="w-5 h-5" />
                    <span>4: Synthesis</span>
                  </CardTitle>
                  <CardDescription>Integrating multiple FOV images</CardDescription>
                </CardHeader>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="documentation" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Documentation</h2>
          <p className="text-lg text-gray-600 mb-8">
            Complete guides covering every aspect of MERFISH analysis with MASMR
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-left">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>Spot-calling Guide</span>
                </CardTitle>
                <CardDescription>
                  Detecting and quantifying RNA spots with advanced algorithms
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-left">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ImageIcon className="w-5 h-5" />
                  <span>Image Processing</span>
                </CardTitle>
                <CardDescription>
                  Building custom imaging pipelines for preprocessing, filtering, and enhancing MERFISH images
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-left">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Scissors className="w-5 h-5" />
                  <span>Cell Segmentation</span>
                </CardTitle>
                <CardDescription>Methods for accurate cell boundary detection and integration with open source cell segmentation tools</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-left">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Grid3x3 className="w-5 h-5" />
                  <span>Stitching</span>
                </CardTitle>
                <CardDescription>
                  Techniques for combining multiple field-of-view images into seamless mosaics
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-left">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Layers className="w-5 h-5" />
                  <span>Synthesis</span>
                </CardTitle>
                <CardDescription>
                  Advanced methods for integrating multi-round imaging data and gene expression analysis
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-left">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HelpCircle className="w-5 h-5" />
                  <span>Troubleshooting</span>
                </CardTitle>
                <CardDescription>
                  Common issues, solutions, and best practices for optimal MERFISH analysis results
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Installation</h2>
          <p className="text-lg text-gray-600 mb-8">Get started with MASMR in just one command</p>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Install from GitHub</span>
              </CardTitle>
              <CardDescription className="text-left">
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mt-4">
                  <code>devtools::install_github('eugenekwaNeuromics/masmr')</code>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
          <div className="mt-6 text-sm text-gray-600">
            <p>
              Make sure you have the <code className="bg-gray-200 px-2 py-1 rounded">devtools</code> package installed
              first.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">MASMR</span>
              </div>
              <p className="text-gray-400">Advanced MERFISH image processing for R</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://eugenekwaneuromics.github.io/masmr/" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#vignettes" className="hover:text-white transition-colors">
                    Vignettes
                  </a>
                </li>
                <li>
                  <a href="#installation" className="hover:text-white transition-colors">
                    Installation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Development</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://github.com/eugenekwaNeuromics/masmr/" className="hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/eugenekwaNeuromics/masmr/issues"
                    className="hover:text-white transition-colors"
                  >
                    Issues
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/eugenekwaNeuromics/masmr/pulls"
                    className="hover:text-white transition-colors"
                  >
                    Pull Requests
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Bug Reports
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MASMR. Open source software.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
