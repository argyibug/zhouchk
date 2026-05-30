## Sample Blog Post

This is a sample blog post written in Markdown. The blog system parses this file at runtime and renders the HTML on the blog page.

## How to add a post

1. Add a new markdown file in `blogs/`.
2. Register it in `blog-data.js` with an `id`, `title`, `date`, `author`, `excerpt`, `tags`, `readTime`, and `markdownFile`.
3. The blog list and the post detail page will pick it up automatically.

## Markdown supported

You can use standard Markdown features: **bold**, *italic*, [links](https://example.com), inline `code`, and code blocks.

```python
def hello(name: str) -> str:
    return f"hello, {name}"
```

That's it — happy writing.
