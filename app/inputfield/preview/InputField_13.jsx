// Credit card input component with card type detection and formatting
const CreditCardInput = ({
  value: externalValue = '',
  onChange,
  hasError = false,
  errorMessage = 'Invalid card number',
  disabled = false,
  className = '',
  style,
}) => {
  const [value, setValue] = React.useState(externalValue);
  const [isFocused, setIsFocused] = React.useState(false);
  const [cardType, setCardType] = React.useState('unknown');
  const inputId = React.useId();

  // Card type detection
  const detectCardType = (number) => {
    const num = number.replace(/\D/g, '');
    
    if (/^4/.test(num)) return 'visa';
    if (/^5[1-5]/.test(num)) return 'mastercard';
    if (/^3[47]/.test(num)) return 'amex';
    if (/^6(?:011|5)/.test(num)) return 'discover';
    return 'unknown';
  };

  // Format card number
  const formatCardNumber = (number) => {
    const num = number.replace(/\D/g, '');
    const type = detectCardType(num);
    setCardType(type);
    
    if (type === 'amex') {
      return num.replace(/(\d{4})(\d{6})(\d{5})/, '$1 $2 $3').trim();
    }
    return num.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
  };

  const handleChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    const formattedValue = formatCardNumber(rawValue);
    setValue(formattedValue);
    
    if (onChange) {
      onChange(formattedValue, detectCardType(rawValue));
    }
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // Get card icon based on card type
  const getCardIcon = () => {
    switch (cardType) {
      case 'visa':
        return <span style={{ color: '#1a1f71' }}>VISA</span>;
      case 'mastercard':
        return <span style={{ color: '#eb001b' }}>MC</span>;
      case 'amex':
        return <span style={{ color: '#006fcf' }}>AMEX</span>;
      case 'discover':
        return <span style={{ color: '#ff6600' }}>DISCOVER</span>;
      default:
        return <span>••••</span>;
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div 
        style={{
          position: 'relative',
          marginBottom: '1.5rem',
        }}
      >
        <label 
          htmlFor={inputId}
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            color: hasError ? '#ef4444' : '#4b5563',
            fontWeight: 500,
            fontSize: '0.875rem',
          }}
        >
          Card Number
        </label>
        
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '0.375rem',
            border: `1px solid ${hasError ? '#ef4444' : isFocused ? '#4f46e5' : '#d1d5db'}`,
            backgroundColor: disabled ? '#f3f4f6' : '#ffffff',
            transition: 'all 0.2s ease',
            boxShadow: isFocused ? '0 0 0 2px rgba(79, 70, 229, 0.2)' : 'none',
            opacity: disabled ? 0.7 : 1,
          }}
        >
          <input
            id={inputId}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            placeholder="1234 5678 9012 3456"
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              border: 'none',
              background: 'transparent',
              fontSize: '1rem',
              outline: 'none',
              color: disabled ? '#9ca3af' : '#111827',
              letterSpacing: '0.5px',
            }}
          />
          
          <div 
            style={{
              padding: '0 1rem',
              color: '#6b7280',
              fontSize: '0.75rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            {getCardIcon()}
          </div>
        </div>
        
        {hasError && (
          <p 
            style={{
              marginTop: '0.5rem',
              color: '#ef4444',
              fontSize: '0.75rem',
            }}
          >
            {errorMessage}
          </p>
        )}
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ flex: 1 }}>
          <label 
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#4b5563',
              fontWeight: 500,
              fontSize: '0.875rem',
            }}
          >
            Expiry Date
          </label>
          <input
            type="text"
            placeholder="MM/YY"
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '0.375rem',
              border: '1px solid #d1d5db',
              fontSize: '1rem',
              outline: 'none',
            }}
          />
        </div>
        
        <div style={{ flex: 1 }}>
          <label 
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#4b5563',
              fontWeight: 500,
              fontSize: '0.875rem',
            }}
          >
            CVV
          </label>
          <input
            type="text"
            placeholder="•••"
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '0.375rem',
              border: '1px solid #d1d5db',
              fontSize: '1rem',
              outline: 'none',
            }}
          />
        </div>
      </div>
      
      <button
        style={{
          width: '100%',
          padding: '0.75rem',
          backgroundColor: '#4f46e5',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          fontSize: '1rem',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'background-color 0.2s',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#4338ca'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#4f46e5'}
      >
        Pay Now
      </button>
    </div>
  );
};

// Demo component to showcase the credit card input
const Demo = () => {
  const [cardNumber, setCardNumber] = React.useState('');
  const [hasError, setHasError] = React.useState(false);
  
  const handleCardChange = (value, cardType) => {
    setCardNumber(value);
    // Simple validation - in a real app, use a proper validation library
    const isValid = value.replace(/\D/g, '').length >= 13; // At least 13 digits
    setHasError(!isValid && value.length > 0);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '0 1rem' }}>
      <h2 style={{ color: '#111827', marginBottom: '1.5rem' }}>Payment Information</h2>
      
      <CreditCardInput
        value={cardNumber}
        onChange={handleCardChange}
        hasError={hasError}
        errorMessage="Please enter a valid card number"
      />
      
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem' }}>
        <h3 style={{ marginTop: 0, color: '#4b5563' }}>Test Card Numbers:</h3>
        <ul style={{ paddingLeft: '1.25rem', color: '#4b5563' }}>
          <li>Visa: 4111 1111 1111 1111</li>
          <li>Mastercard: 5555 5555 5555 4444</li>
          <li>Amex: 3782 822463 10005</li>
          <li>Discover: 6011 1111 1111 1117</li>
        </ul>
      </div>
    </div>
  );
};

render(<Demo />);
