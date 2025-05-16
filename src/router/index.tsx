import dynamic from "next/dynamic"

export const DynamicHeader = dynamic(
  () => import("@/pages/components/header"),
  {
    loading: () => <p>Loading...</p>,
  }
)
export const DynamicFooter = dynamic(
  () => import("@/pages/components/footer"),
  {
    loading: () => <p>Loading...</p>,
  }
)
export const DynamicHello = dynamic(() => import("@/pages/components/hello"), {
  loading: () => <p>Loading...</p>,
})
