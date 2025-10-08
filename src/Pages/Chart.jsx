import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import useProducts from "../Hooks/useProducts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

function Chart() {
  const { products } = useProducts();

  const totalCategory = {};
  products.forEach((product) => {
    const category = product.category;
    totalCategory[category] = (totalCategory[category] || 0) + product.price;
  });

  const cartData = Object.entries(totalCategory).map(([category, price]) => ({
    category,
    price,
  }));

  return (
    <>
      <h3 className="text-2xl font-semibold text-center">Product Summary</h3>
      <hr className="my-5" />
      <div className="flex justify-center items-center">
        <BarChart
          width={900}
          height={500}
          data={cartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255,255,255,0.9)",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <Legend />
          <Bar
            dataKey="price"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
            isAnimationActive={false}
          >
            {cartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </div>
    </>
  );
}

export default Chart;
