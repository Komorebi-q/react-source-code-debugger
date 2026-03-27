const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  
  export default function Total({quantity, isPending}:{quantity: number, isPending: boolean}) {
    return (
      <div className="total">
        <span onAuxClick={() => {
            console.log('auxclick')
        }}>Total:</span>
        <span>
          {isPending ? "🌀 Updating..." : `${intl.format(quantity * 9999)}`}
        </span>
      </div>
    )
  }
  