import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { title, description, date } from '../markdown/example.mdx';

function ArticleCard({ article }) {
  // let { title, description, createdAt } = article.properties
  // title = title.title[0].plain_text
  // description = description.rich_text[0].plain_text
  // createdAt = new Date(createdAt.created_time).toLocaleDateString('en-US', {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  // })
  // let title = 'How you doin?';
  // let description = 'lorem20';
  let createdAt = date;
  const titleSlug = slugify(title, { lower: true });

  return (
    <Link
      to={`/articles/${titleSlug}`}
      // state={{
      //   id: article.id,
      //   createdAt,
      //   title,
      //   titleSlug,
      // }}
    >
      <div className="flex flex-col gap-2 sm:gap-12 md:gap-24 sm:flex-row max-w-2xl hover:bg-gray-100 duration-150 ease-in-out p-4 sm:p-6 rounded-2xl cursor-pointer">
        <p className="text-gray-400 text-sm flex items-center sm:items-start gap-3">
          <span className="inline-block w-[2px] h-4 bg-gray-400 sm:hidden"></span>{' '}
          {/* date */} {createdAt}
        </p>
        <div className="space-y-3">
          <p className="font-semibold text-gray-800">
            {/* title */} {title}
          </p>
          <p className="text-sm text-gray-500">
            {/* description */} {description}
          </p>
          <p className="text-sm text-[#14B8A6]">Read article &#8594;</p>
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;
