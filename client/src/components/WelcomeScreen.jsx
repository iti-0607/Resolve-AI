import {
    Package,
    CreditCard,
    RotateCcw,
    Truck,
  } from "lucide-react";
  
  function WelcomeScreen({ onQuickAction }) {
    const actions = [
      {
        title: "Track Order",
        description: "Check your order status and shipment updates.",
        icon: Package,
        prompt: "I want to track my order. Can you help me check its current status?",
      },
      {
        title: "Payment Issue",
        description: "Resolve payment failures or transaction problems.",
        icon: CreditCard,
        prompt: "My payment was deducted but my order was not confirmed.",
      },
      {
        title: "Refund & Return",
        description: "Request refunds or return purchased items.",
        icon: RotateCcw,
        prompt: "I requested a refund but I haven't received it yet.",
      },
      {
        title: "Delivery Delay",
        description: "Report delayed or missing deliveries.",
        icon: Truck,
        prompt: "My order was supposed to arrive yesterday but it is still delayed."
      },
    ];
  
    return (
      <div className="flex-1 overflow-y-auto bg-gradient-to-b from-slate-100 to-white">
  
        <div className="max-w-5xl mx-auto py-16 px-8">
  
          <h1 className="text-5xl font-bold text-center">
            👋 Welcome to ResolveAI
          </h1>
  
          <p className="text-center text-gray-500 mt-4 text-lg">
            Your AI-powered Customer Care Assistant
          </p>
  
          <div className="grid grid-cols-2 gap-6 mt-14">
  
            {actions.map((action) => {
  
              const Icon = action.icon;
  
              return (
  
                <button
                  key={action.title}
                  onClick={() => onQuickAction(action.prompt)}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-200 p-6 text-left transition-all duration-300 hover:-translate-y-1"
                >
  
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
  
                    <Icon
                      className="text-blue-600"
                      size={28}
                    />
  
                  </div>
  
                  <h2 className="text-xl font-semibold">
  
                    {action.title}
  
                  </h2>
  
                  <p className="text-gray-500 mt-2">
  
                    {action.description}
  
                  </p>
  
                </button>
  
              );
  
            })}
  
          </div>
  
          <div className="mt-16">
  
            <h3 className="text-xl font-semibold mb-5">
  
              Popular Questions
  
            </h3>
  
            <div className="space-y-3">
            <button
  onClick={() => onQuickAction("My order is delayed.")}
  className="w-full text-left bg-white rounded-xl p-4 shadow-sm border hover:bg-slate-50 transition"
>
  📦 My order is delayed.
</button>

<button
  onClick={() => onQuickAction("Payment deducted but order failed.")}
  className="w-full text-left bg-white rounded-xl p-4 shadow-sm border hover:bg-slate-50 transition"
>
  💳 Payment deducted but order failed.
</button>

<button
  onClick={() => onQuickAction("I haven't received my refund.")}
  className="w-full text-left bg-white rounded-xl p-4 shadow-sm border hover:bg-slate-50 transition"
>
  ↩ I haven't received my refund.
</button>

<button
  onClick={() => onQuickAction("I want to change my delivery address.")}
  className="w-full text-left bg-white rounded-xl p-4 shadow-sm border hover:bg-slate-50 transition"
>
  🚚 Change my delivery address.
</button>

  
  
            </div>
  
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default WelcomeScreen;