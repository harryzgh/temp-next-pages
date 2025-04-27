
import Image from 'next/image'

export default function Header () {
    return (
      <header className='flex justify-between items-center h-16 bg-(--black-background) text-[14px] pl-6 pr-6'>
        <div className='flex items-center text-(--text-color) h-full leading-16'>
          <Image
            alt="火币网-领先的比特币交易平台"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYzIiBoZWlnaHQ9IjIwMyIgdmlld0JveD0iMCAwIDQ2MyAyMDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik04Ny4wODM2IDYyLjEzNzNDODcuNjg1OCAzMi4zMjY2IDcwLjgwNSA2LjM1MDE2IDYyLjAxMzMgMC4xMDY5NzlDNjEuOTczMSAwLjA2NjgyOTcgNjEuMTkwMyAtMC4zNTQ3MzEgNjEuMjUwNSAwLjgwOTU5MkM2MS4yNTA1IDAuODI5NjY3IDYxLjIzMDUgMC44Mjk2NiA2MS4yMzA1IDAuODQ5NzM1QzYwLjMyNzIgNTcuMTU4OCAzMS4zODI4IDcyLjMzNTIgMTUuNjY2MiA5Mi45NzE4Qy0xOS4yNTk3IDEzOC44NjIgOS44ODUzMiAxOTEuMjE3IDQ3LjY0MTQgMjAxLjEzM0M0OC4yODM4IDIwMS4yOTQgNTAuMDMwMSAyMDEuODE2IDUzLjM0MiAyMDIuNDk5QzU1LjA2ODIgMjAyLjg2IDU1LjU3IDIwMS4zOTQgNTQuMzA1NSAxOTkuMjA2QzQ5Ljc4OTIgMTkxLjM1NyA0MS43NjAyIDE3OC4xMDggNDAuMTc0NSAxNjEuMDg1QzM2LjU2MTUgMTIxLjU1OCA4Ni4zODExIDk2LjgyNjEgODcuMDgzNiA2Mi4xMzczWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEwNi4xMTMgODEuMjI3OEMxMDUuODEyIDgxLjAwNjkgMTA1LjM5IDgxLjAyNyAxMDUuMzUgODEuNDA4NEMxMDQuNTQ3IDg4LjU3NTEgOTcuMTQwMiAxMDMuNDMgODcuMzg1MSAxMTcuMzIyQzU0LjU0NjcgMTY0LjE1NiA3MS4wODYzIDE4NS4zOTUgODMuOTMyNiAyMDAuMTI5Qzg2LjMwMTEgMjAyLjg1OSA4Ny40ODU0IDIwMi4yNTcgODguNzI5OSAyMDAuMzFDODkuODk0MSAxOTguNDYzIDkxLjY2MDQgMTk2LjExNCA5OS4yNDc4IDE5Mi41MjFDMTAwLjQzMiAxOTEuOTU5IDEyOS4wOTUgMTc2Ljc0MiAxMzIuMjA3IDE0Mi4wOTRDMTM1LjE5NyAxMDguNTQ5IDExMy43IDg3LjM3MDYgMTA2LjExMyA4MS4yMjc4WiIgZmlsbD0iIzAwOENENiIvPgo8cGF0aCBkPSJNMjMxLjE5NyA2Mi4wNDE5SDI0MC40NDFDMjQ2LjAwMiA2Mi4wNDE5IDI1MC41MDggNjYuNTU1MSAyNTAuNTAxIDcyLjExNThDMjUwLjQ4IDgzLjQ2NTYgMjUwLjQzOCA5Ni4zMTk4IDI1MC42OCAxMDYuMjkyQzI1MC44OTEgMTE0Ljc3MyAyNTMuNDkyIDE0MC42OTMgMjY4LjExMSAxNTkuODA3QzI3OC44MDcgMTczLjYgMjkzLjQxOSAxNzkuNzQgMzAyLjEwNCAxODIuMzE3QzMwNi4zODkgMTgzLjU4OSAzMDkuMzQyIDE4Ny41MDUgMzA5LjM2NiAxOTEuOTc2QzMwOS4zODcgMTk1LjQzMSAzMDkuNDUgMTk4Ljk5NSAzMDkuNDYxIDIwMS44NDZDMzA5LjQ2MSAyMDIuMjY0IDMwOS4xMDMgMjAyLjU5NSAzMDguNjg0IDIwMi41NDlDMjg0LjYyOCAxOTkuOTQxIDI1My45NzQgMTgyLjM0OSAyNDAuNzYxIDE0OS4xNzhDMjM5Ljk5NSAxNTEuMTg1IDIzMi40OCAxNzAuMzQ4IDIxNC4zNjcgMTg0Ljg2OUMxOTcuNDc0IDE5OC40MTIgMTc3LjU4NyAyMDEuODc4IDE3My4zMTYgMjAyLjQ2MUMxNzIuODk0IDIwMi41MTcgMTcyLjUyMiAyMDIuMTk0IDE3Mi41MjIgMjAxLjc2OUMxNzIuNTE4IDE5OS4wNDEgMTcyLjQ5NyAxOTUuNDQ5IDE3Mi40OSAxOTEuODU3QzE3Mi40ODMgMTg3LjM2MSAxNzUuNDcxIDE4My40MzEgMTc5Ljc4NyAxODIuMThDMTkzLjg1IDE3OC4xMDIgMjA1Ljc1NiAxNjkuOTI3IDIxNC43MDUgMTU3LjkxNkMyMjguODgxIDE0MC41MzggMjMxLjMyIDEwNy44ODggMjMxLjIyMiA5NS41Mjg5QzIzMS4xNDEgODUuMzEwOSAyMzEuMjA0IDc1LjA4OTQgMjMxLjIwNCA2NC44NzQ5VjYyLjA0MTlIMjMxLjE5N1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xODMuOTc5IDEzMS42NDVDMTgzLjQ1NSAxMjUuNjczIDE3OS40MTYgNzkuNTc3OSAxNzguODQgNzIuOTMxMUMxNzguODA1IDcyLjUyMzQgMTc5LjEyOCA3Mi4xNzE5IDE3OS41MzkgNzIuMTcxOUgxODkuMjUxQzE5NC40NjQgNzIuMTcxOSAxOTguODEyIDc2LjE1NzggMTk5LjI2NSA4MS4zNDk0QzIwMC42MDEgOTYuNjk1OCAyMDMuMTg1IDEyNi4zOTQgMjAzLjYyIDEzMS41MjlDMjAzLjY1NiAxMzEuOTM3IDIwMy4zMzIgMTMyLjI4NSAyMDIuOTI0IDEzMi4yODVIMTg0LjY3OEMxODQuMzE2IDEzMi4yODUgMTg0LjAxNCAxMzIuMDA3IDE4My45ODIgMTMxLjY0OUwxODMuOTc5IDEzMS42NDVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzAyLjM2NSA3Mi45MzM4TDI5Ny4yMTkgMTMxLjY0MUMyOTcuMTg3IDEzMi4wMDMgMjk2Ljg4MiAxMzIuMjg0IDI5Ni41MTkgMTMyLjI4NEgyNzguNDg4QzI3OC4wNzYgMTMyLjI4NCAyNzcuNzUzIDEzMS45MjkgMjc3Ljc4OCAxMzEuNTIxTDI4Mi4xNzggODEuMzU1N0MyODIuNjMyIDc2LjE2MDYgMjg2Ljk4MyA3Mi4xNzQ2IDI5Mi4yIDcyLjE3NDZIMzAxLjY2OUMzMDIuMDggNzIuMTc0NiAzMDIuNDA0IDcyLjUyOTYgMzAyLjM2OCA3Mi45MzczTDMwMi4zNjUgNzIuOTMzOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00NjIuNDc0IDc4LjQ1MTNMNDYxLjk5OCA2OC42MDc1QzQ2MS44MDEgNjQuNTg3OSA0NTguNTM2IDYxLjQ4NzEgNDU0LjcxMyA2MS42ODRMMzM2LjI5NCA2Ny44MDM1Vjg0LjkxNTVMMzkwLjcwNCA4Mi4xNDI4VjEwMy43ODNIMzQwLjY5MVYxMDQuMTExSDM0MC4zOTZWMTg2LjgzMkgzNDAuNjkxVjE4Ny4wMTNIMzU3LjYwOFYxMjIuMDc2SDM5MC43MDRWMjAyLjUzM0g0MDcuMjc2VjEyMi4wNzZINDQyLjE0NFYxNzAuNzA1SDQyNC42MzZWMTg2LjM3M0g0NDQuOTk5QzQ1Mi45MjQgMTg2LjM3MyA0NTkuMzQgMTc5LjY0NiA0NTkuMzQgMTcxLjM0NVYxMTguODExQzQ1OS4zNCAxMTAuNTA5IDQ1Mi45MjQgMTAzLjc4MyA0NDQuOTk5IDEwMy43ODNINDA3LjI3NlY4MS4yODk2TDQ2Mi40OSA3OC40MzQ5TDQ2Mi40NzQgNzguNDUxM1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
            width={68}
            height={20}
            className='cursor-pointer mr-[24px]'
          />
          <div className='pl-3 pr-3 h-full cursor-pointer'>买币</div>
          <div className='pl-3 pr-3 h-full cursor-pointer'>行情资讯</div>
          <div className='pl-3 pr-3 h-full cursor-pointer'>交易</div>
          <div className='pl-3 pr-3 h-full cursor-pointer'>合约</div>
          <div className='pl-3 pr-3 h-full cursor-pointer'>赚币</div>
        </div>
        <div className='flex items-center text-(--text-color) h-full'>
          <button className='pl-4 pr-4 pt-1 pb-1 leading-8 cursor-pointer'>登录</button>
          <button className='pl-4 pr-4 pt-1 pb-1 bg-(--main-blue) leading-8 rounded-[4px] text-[white] cursor-pointer'>注册</button>
          <div className='bg-[24px] bg-[url("https://app-static-1306115679.file.myqcloud.com/statics/enhome/_next/static/media/icon-lang.d3cadddd.svg")]'></div>
          <Image
            alt="下载图片"
            src="https://app-static-1306115679.file.myqcloud.com/statics/enhome/_next/static/media/icon-lang.d3cadddd.svg"
            width={24}
            height={24}
            className='pl-3 pr-3 cursor-pointer text-[white]'
          />
        </div>
      </header>
    )
}