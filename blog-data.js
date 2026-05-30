/**
 * Blog Posts Data - Replace with your own posts
 * Each entry can either inline its HTML in `htmlContent` or reference an
 * external markdown file via `markdownFile` (which is fetched at runtime).
 */

const blogPosts = [
  {
    id: "sample-post",
    title: "Sample Blog Post",
    date: "2025-01-01",
    author: "Your Name",
    excerpt: "A short, one-sentence excerpt that previews this post on the blogs page.",
    tags: ["Topic", "Sample"],
    readTime: 3,
    markdownFile: "blogs/sample-post.md",
    content: null,      // Will be loaded from the markdown file
    htmlContent: null   // Will be generated from the markdown
  }
];

// Helper function to get all blog posts (sorted newest first)
function getAllBlogPosts() {
  return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Helper function to get a specific blog post by ID
function getBlogPost(id) {
  return blogPosts.find(post => post.id === id);
}
