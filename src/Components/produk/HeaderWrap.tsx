import ButtonSecond from '../button/ButtonSecond'
import ButtonPrimary from '../button/ButtonPrimary'
import setCar from '../../assets/517.jpg'

const HeaderWrap = () => {
  return (
    <div>
        <div className="bg-slate-200">
          <div className="flex justify-between items-center px-12 pt-5 pb-8 sm:px-4">
            <div className="flex flex-col justify-center gap-y-5 w-2/5 sm:w-auto">
              <p className="text-4xl font-bold">
                Awesome Digital Agency With Cool Style
              </p>
              <div className="sm:!flex sm:justify-center sm:flex-wrap sm:w-full hidden">
                <img
                  className="min-w-[280px] max-w-[480px] w-full"
                  src={setCar}
                  alt=""
                />
              </div>
              <p className="text-sm text-justify text-slate-700 sm:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                consectetur explicabo atque, incidunt, at, iusto quae iure animi
                dolore impedit vero ipsum voluptatem amet nostrum laboriosam
                tempore rerum ab. Molestias.
              </p>
              <div className="flex gap-4">
                <ButtonPrimary title="primary" />
                <ButtonSecond title="second" />
              </div>
            </div>
            <div className="flex justify-center w-1/2 sm:hidden">
              <img className="h-96" src={setCar} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeaderWrap