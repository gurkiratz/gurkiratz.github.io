const fs = require('fs');
const slugify = require('slugify');

exports.createArticle = (req, res) => {
  const { mdxContent } = req.body;
  const slug = slugify(mdxContent.title, {
    remove: '#',
    trim: true,
    lower: true,
  });

  const folderPath = './markdown';
  const fileName = `${slug}.mdx`;
  const filePath = `${folderPath}/${fileName}`;

  fs.mkdirSync(folderPath, { recursive: true }); // Create the 'markdown' folder if it doesn't exist

  fs.writeFile(filePath, mdxContent.content, (err) => {
    if (err) {
      console.error('Error saving MDX file:', err);
      res
        .status(500)
        .json({ success: false, message: 'Error saving MDX file' });
    } else {
      console.log('Article published successfully!');
      res
        .status(201)
        .json({ success: true, message: 'Article published successfully!' });
    }
  });
};

exports.getArticles = (req, res) => {};
