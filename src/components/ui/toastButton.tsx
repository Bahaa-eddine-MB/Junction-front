

import { ToastAction } from "./toast" 
import { useToast } from "./use-toast"  

export function ToastDemo() {
  const { toast } = useToast()

  console.log('rrrr');

  return (
    <button
   
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction   className="z-50" altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })
      }}
    >
      Add to calendar
    </button>
  )
}
