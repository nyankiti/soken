import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const AccordionBio = () => {
  return (
    <div id="bio">
      <h3 className="mt-0 mb-2 text-3xl font-medium leading-tight text-cyan-600">
        Bio
      </h3>
      <div className=" w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span>経歴</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                奈良県斑鳩町出身
                <br />
                奈良県立郡山高等学校 → 大阪市立大学工学部化学バイオ工学科 →
                メガベンチャーエンジニア(23卒)
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span>技術</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                React.js, Nest.js(Typescript)などを用いたweb開発
                <br />
                React Nativeでのスマホアプリ開発(バックエンドはFirebase)
                <br />
                Python, C++で競プロ出場
                <br />
                その他、PHP,LaravelやJavaでの開発経験が少し。
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span>興味</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                Web周りの技術全般、機械学習・統計、web3など、好奇心の赴くままに楽しく学んでいます。学部時代(応用化学専攻)の経験より、物理化学も興味の対象内。
                <br />
                機械学習・統計、web3については素人レベル。とりあえずKaggleに挑戦したいと思っている。
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span>資格など</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <table className="table-auto">
                  <tbody>
                    <tr>
                      <td>2019年</td>
                      <td>6月</td>
                      <td>実用英語技能検定順一級</td>
                    </tr>
                    <tr>
                      <td>2020年</td>
                      <td>6月</td>
                      <td>G検定</td>
                    </tr>
                    <tr>
                      <td>2020年</td>
                      <td>12月</td>
                      <td>TOEIC 825</td>
                    </tr>
                    <tr>
                      <td>2020年</td>
                      <td>12月</td>
                      <td>統計検定 二級</td>
                    </tr>
                    <tr>
                      <td>2021年</td>
                      <td>2月</td>
                      <td>基本情報技術者試験</td>
                    </tr>
                    <tr>
                      <td>2021年</td>
                      <td>6月</td>
                      <td>応用情報技術者試験</td>
                    </tr>
                  </tbody>
                </table>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default AccordionBio;
