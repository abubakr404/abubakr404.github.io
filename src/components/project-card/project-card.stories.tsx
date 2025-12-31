import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "./project-card";
import { Code, Database, Globe } from "lucide-react";

const meta: Meta<typeof ProjectCard> = {
  title: "Components/ProjectCard",
  component: ProjectCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

const mockTechnologies = [
  <Code key="1" className="h-5 w-5" />,
  <Database key="2" className="h-5 w-5" />,
  <Globe key="3" className="h-5 w-5" />,
];

export const Default: Story = {
  args: {
    title: "Project Alpha",
    desc: "A cutting-edge web application built with Next.js and Tailwind CSS. Features include real-time data sync, dark mode, and responsive design.",
    images: {
      desktop: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tablet: "https://images.unsplash.com/photo-1544256718-3bcf237f38ec?auto=format&fit=crop&w=800&q=80",
      mobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    },
    technologies: mockTechnologies,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
};

export const LongDescription: Story = {
  args: {
    ...Default.args,
    title: "Complex Dashboard System",
    desc: "This is a very long description to test how the line clamping works on the project card. It should ideally truncate after two lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
};
