import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Github, Layers, Microscope, Package, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Microscope className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">MASMR</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#documentation" className="text-sm font-medium hover:text-primary">
              Documentation
            </Link>
            <Link href="#installation" className="text-sm font-medium hover:text-primary">
              Installation
            </Link>
            <Link href="#examples" className="text-sm font-medium hover:text-primary">
              Examples
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/eugenekwaneuromics/masmr" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://eugenekwaneuromics.github.io/masmr/" target="_blank" rel="noopener noreferrer">
              <Button>Documentation</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Modular Algorithms for Spotcalling in MERFISH in R
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Build custom image processing pipelines with a focus on MERFISH decoding
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#installation">
                    <Button className="gap-1">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="https://eugenekwaneuromics.github.io/masmr/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">View Documentation</Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="MASMR visualization showing a colorful spiral pattern representing the package's capabilities"
                width={600}
                height={600}
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  MASMR provides a comprehensive toolkit for image processing and analysis in MERFISH data
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Microscope className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Spotcalling</h3>
                  <p className="text-muted-foreground">
                    Advanced algorithms for precise spotcalling in MERFISH images with pre-processing, looping, and
                    metrics analysis
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Layers className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Image Processing</h3>
                  <p className="text-muted-foreground">
                    Modular building blocks for custom image processing pipelines with flexible function composition
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Cell Segmentation</h3>
                  <p className="text-muted-foreground">
                    Powerful tools for cell segmentation, model running, and mask saving for comprehensive spatial
                    analysis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="documentation" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Documentation</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Comprehensive Documentation</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our detailed documentation covers everything from installation to advanced usage, with examples and
                  tutorials to get you started quickly.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="https://eugenekwaneuromics.github.io/masmr/" target="_blank" rel="noopener noreferrer">
                    <Button className="gap-1">
                      View Documentation <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1 rounded-lg border bg-card p-4 shadow-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Package className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold">Installation Guide</h3>
                  <p className="text-sm text-muted-foreground">Step-by-step instructions to get MASMR up and running</p>
                </div>
                <div className="flex flex-col gap-1 rounded-lg border bg-card p-4 shadow-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Code className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold">Quick Start Scripts</h3>
                  <p className="text-sm text-muted-foreground">Ready-to-use scripts to jumpstart your analysis</p>
                </div>
                <div className="flex flex-col gap-1 rounded-lg border bg-card p-4 shadow-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Layers className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold">API Reference</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete function documentation with parameters and examples
                  </p>
                </div>
                <div className="flex flex-col gap-1 rounded-lg border bg-card p-4 shadow-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Microscope className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold">Tutorials</h3>
                  <p className="text-sm text-muted-foreground">In-depth guides for specific analysis workflows</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="installation" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Installation</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started with MASMR in just a few steps
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 py-12">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">Install from GitHub</h3>
                <pre className="overflow-x-auto rounded-lg bg-muted p-4">
                  <code className="text-sm font-mono">
                    {`# Install devtools if you haven't already
install.packages("devtools")

# Install masmr from GitHub
devtools::install_github("eugenekwaneuromics/masmr")

# Load the package
library(masmr)`}
                  </code>
                </pre>
              </div>
              <div className="flex justify-center">
                <Link href="https://eugenekwaneuromics.github.io/masmr/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">View Full Installation Guide</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="examples" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Example Usage</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how MASMR can be used in your MERFISH analysis workflow
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl space-y-8 py-12">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">Basic Spotcalling Workflow</h3>
                <pre className="overflow-x-auto rounded-lg bg-muted p-4">
                  <code className="text-sm font-mono">
                    {`# Load required libraries
library(masmr)

# Pre-process images
processed_images <- preprocess_images(image_dir)

# Run spotcalling
spots <- run_spotcalling(processed_images, params)

# Save results
save_spot_calls(spots, output_dir)`}
                  </code>
                </pre>
              </div>
              <div className="flex justify-center">
                <Link href="https://eugenekwaneuromics.github.io/masmr/" target="_blank" rel="noopener noreferrer">
                  <Button>View More Examples</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to enhance your MERFISH analysis?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get started with MASMR today and unlock powerful tools for your spatial transcriptomics research.
              </p>
            </div>
            <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link href="https://github.com/eugenekwaneuromics/masmr" target="_blank" rel="noopener noreferrer">
                <Button className="gap-1">
                  <Github className="h-4 w-4" /> View on GitHub
                </Button>
              </Link>
              <Link href="https://eugenekwaneuromics.github.io/masmr/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">Read Documentation</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Microscope className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} MASMR. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/eugenekwaneuromics/masmr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              GitHub
            </Link>
            <Link
              href="https://eugenekwaneuromics.github.io/masmr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Documentation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
