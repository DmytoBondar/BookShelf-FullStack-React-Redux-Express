import Sidebar from '@/layout/Sidebar';
import WishList from '@/layout/WishList';

const Wish = () => {
  return (
    <div className="grid grid-cols-6 gap-1 mt-3 mx-2 mb-2">
      <div className="col-span-1 bg-cyan-900 h-full">
        <Sidebar />
      </div>
      <div className="col-span-5">
        <div className="grid grid-cols-2 gap-3 mb-10 mx-2">
          <WishList />
        </div>
      </div>
    </div>
  )
}

export default Wish