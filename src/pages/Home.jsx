import tw from 'twin.macro';
import { BsTwitter, BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import Example from '../markdown/example.mdx';

const A = tw.a`font-bold underline cursor-pointer text-gray-800`;
const AS = tw.a`text-gray-500 text-2xl hover:text-[#14B8A6] ease-in duration-100`;

export default function Home() {
  const [articleContent, setArticleContent] = useState('');

  // useEffect(() => {
  //   import('../markdown/article.md')
  //     .then((res) => {
  //       fetch(res.default)
  //         .then((res) => res.text())
  //         .then((res) => console.log(res))
  //         .catch((err) => console.log(err));
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useDocumentTitle('Gurkirat Singh');
  return (
    <div className="lg:pl-[136px] flex flex-col gap-3 text-lg mt-12">
      <div className="max-w-[40rem]">
        <h1 className="text-2xl font-extrabold mb-4 text-gray-800">
          Who the hell am I?
        </h1>
        <div className="text-lg leading-normal space-y-6 mb-8">
          <p>
            Hi! I'm{' '}
            <A href="https://github.com/gurkiratz" target="_blank">
              @gurkiratz
            </A>
            , a first year Computer Science student at 🎓 Humber College,
            Toronto.
          </p>
          <p>
            I enjoy working and developing web applications(and APIs for all
            purposes).
          </p>
          <div className="flex gap-10 text-2xl text-gray-500">
            <AS href="https://twitter.com/theGurSingh" target="_blank">
              <BsTwitter />
            </AS>
            <AS href="https://github.com/gurkiratz" target="_blank">
              <BsGithub />
            </AS>
            <AS href="https://www.linkedin.com/in/gurkiratz/" target="_blank">
              <BsLinkedin />
            </AS>
            <AS href="https://www.instagram.com/gurkiratxz/" target="_blank">
              <BsInstagram />
            </AS>
          </div>
        </div>
        <h1 className="text-2xl font-extrabold mb-4 text-gray-800">Posts</h1>
        <div className="text-lg leading-normal space-y-6 mb-8">
          <Example name="mars" year="2043" />
        </div>
      </div>
    </div>
  );
}
