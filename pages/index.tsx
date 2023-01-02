import type { NextPage } from 'next';
import Head from 'next/head';
/* components */
import AccordionBio from 'components/AccordionBio';
/* data */
import { SNS_DATA, WEB_APPS } from 'data';

const Home: NextPage = () => {
  return (
    <div className="p-4 sm:p-8">
      <Head>
        <title>Soda Kentaro</title>
        <meta name="description" content="Soda Kentaro resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-6 text-gray-500">
        <h1 className="py-2">Soda Kentaro&apos;s Portfolio</h1>
        <div id="web-apps">
          <h3 className="mt-0 mb-2 text-3xl font-medium leading-tight text-cyan-600">
            Web App
          </h3>
          <ul>
            {WEB_APPS.map((data, i) => {
              return (
                <li
                  key={i}
                  className="my-2 flex flex-col md:flex-row md:items-center"
                >
                  <div className="whitespace-nowrap p-2 font-bold text-gray-900">
                    <a
                      href={data.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 underline"
                    >
                      {data.name}
                    </a>
                  </div>
                  <div className="px-2">
                    <p>{data.description}</p>
                    {data.iOSUrl && (
                      <p>
                        iOS:
                        <a
                          href={data.iOSUrl}
                          target="_blank"
                          rel="noreferrer"
                          className=" text-blue-500 underline"
                          style={{ wordWrap: 'break-word' }}
                        >
                          {data.iOSUrl}
                        </a>
                      </p>
                    )}
                    {data.androidUrl && (
                      <p>
                        android:
                        <a
                          href={data.androidUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-500 underline"
                          style={{ wordWrap: 'break-word' }}
                        >
                          {data.androidUrl}
                        </a>
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div id="cp">
          <h3 className="mt-0 mb-2 text-3xl font-medium leading-tight text-cyan-600">
            競プロ
          </h3>
          <ol className="mx-4 list-disc p-2">
            <li>
              AtCoder:
              <a
                href="https://atcoder.jp/users/Nyankiti"
                target="_blank"
                rel="noreferrer"
                className=" mx-2 text-blue-500 underline"
              >
                @Nyankiti
              </a>
            </li>
            <li className="font-bold">
              <a
                href="https://nyankiti.github.io/algo-library/intro.html"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                Library(アルゴリズム、数学の勉強の備忘録)
              </a>
            </li>
          </ol>
        </div>
        <div id="contact">
          <h3 className="mt-0 mb-2 text-3xl font-medium leading-tight text-cyan-600">
            SNS & Contact
          </h3>
          <ol className="mx-4 list-disc p-2">
            {SNS_DATA.map((data, i) => {
              return (
                <li key={i}>
                  {data.snsName}:
                  <a
                    href={data.url}
                    target={data.snsName != 'mail' ? '_blank' : undefined}
                    rel="noreferrer"
                    className="mx-2 text-blue-500 underline"
                  >
                    {data.userName}
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
        <AccordionBio />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
