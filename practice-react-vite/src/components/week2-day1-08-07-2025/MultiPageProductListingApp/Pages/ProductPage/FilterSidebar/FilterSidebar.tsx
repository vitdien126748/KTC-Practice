import type { Category } from "../ProductPage";

type FilterSidebarProps = {
  categories: Category[];
  onCategoryFilter: (categoryId: number, isChecked: boolean) => void;
};

const FilterSidebar = ({
  categories,
  onCategoryFilter,
}: FilterSidebarProps) => {
  return (
    <aside className="min-w-[180px] max-w-[220px] mr-8">
      <h2 className="font-semibold text-lg mb-3">Bộ lọc</h2>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.id}>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                value={cat.id}
                className="accent-orange-500 w-4 h-4"
                onChange={(e) => onCategoryFilter(cat.id, e.target.checked)}
              />
              <span className="text-gray-700">{cat.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default FilterSidebar;
