import { Suspense } from "react";
import { OrderConfirmationClient } from "./OrderConfirmationClient";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return [{ id: "PKP-7419" }, { id: "PKP-6892" }];
}

export default async function OrderConfirmationPage({ params }: Props) {
  const { id } = await params;

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FAF7F2] py-20 text-center text-amber-900 font-bold">
          Loading order details...
        </div>
      }
    >
      <OrderConfirmationClient id={id} />
    </Suspense>
  );
}
