

const Loding = () => {
    return ( 
        <div className="border border-blue-300 shadow rounded-md p-4 w-full max-w-lg mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-400 rounded"></div>
              <div className="grid grid-cols-12 gap-4">
                <div className="h-2 bg-slate-400 rounded col-span-12"></div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="h-2 bg-slate-400 rounded col-span-12"></div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="h-2 bg-slate-400 rounded col-span-12"></div>
              </div>
          </div>
        </div>
      </div>
     );
}
 
export default Loding;