

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, name, value, onChange }) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="px-4 py-2 rounded-md focus:outline-none focus:border-green-700 focus:ring focus:ring-green-700 text-black placeholder-black"
      placeholder={`Digite ${label}`}
    />
  );
};

export default Input;