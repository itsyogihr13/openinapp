import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const MockDataTable = () => {
  const itemsPerPage = 5; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedTags, setSelectedTags] = useState({});

  const mockData = [
    {
      id: 1,
      link: "timesonline.co.uk",
      prefix: "QB0GaK7",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
    {
      id: 2,
      link: "merriam-webster.com",
      prefix: "8oUTDyz",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
    {
      id: 3,
      link: "newyorker.com",
      prefix: "Z9i2o9o",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
    {
      id: 4,
      link: "angelfire.com",
      prefix: "pW44f49",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
    {
      id: 5,
      link: "rambler.ru",
      prefix: "w1vDJvP",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
    {
      id: 6,
      link: "timesonline.co.uk",
      prefix: "Uz3Uq87",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
    {
      id: 7,
      link: "state.gov",
      prefix: "PwT2wMc",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
    {
      id: 8,
      link: "youtube.com",
      prefix: "c1TO1x6",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
    {
      id: 9,
      link: "washingtonpost.com",
      prefix: "4KtfXaU",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
    {
      id: 10,
      link: "icq.com",
      prefix: "nh294Ty",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
    {
      id: 11,
      link: "cbsnews.com",
      prefix: "0e56PW3",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
    {
      id: 12,
      link: "google.pl",
      prefix: "NNq9FXo",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
    {
      id: 13,
      link: "uiuc.edu",
      prefix: "55b5FKK",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
    {
      id: 14,
      link: "creativecommons.org",
      prefix: "0Q43Q2J",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
    {
      id: 15,
      link: "cam.ac.uk",
      prefix: "1dYVlCo",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
    {
      id: 16,
      link: "microsoft.com",
      prefix: "5leG2TS",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
    {
      id: 17,
      link: "ebay.co.uk",
      prefix: "2tYI62f",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
    {
      id: 18,
      link: "ucsd.edu",
      prefix: "Dfdk2F4",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
    {
      id: 19,
      link: "constantcontact.com",
      prefix: "6OFdyTY",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
    {
      id: 20,
      link: "seesaa.net",
      prefix: "IYU6iyo",
      tags: "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
    },
  ];

  const offset = currentPage * itemsPerPage;
  const currentData = mockData.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleTagSelect = (id, tags) => {
    setSelectedTags((prevTags) => ({
      ...prevTags,
      [id]: tags.split(",").map((tag) => tag.trim()),
    }));
  };

  return (
    <div className="overflow-x-auto mt-[150px]">
      <table className="min-w-full bg-white border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">S.no</th>
            <th className="py-2 px-4 border-b">Link</th>
            <th className="py-2 px-4 border-b">Prefix</th>
            <th className="py-2 px-4 border-b">Tags</th>
            <th className="py-2 px-4 border-b">Selected Tags</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="py-2 px-4 border-b">{item.id}</td>
              <td className="py-2 px-4 border-b">{item.link}</td>
              <td className="py-2 px-4 border-b">{item.prefix}</td>
              <td className="py-2 px-4 border-b">{item.tags}</td>
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  value={
                    selectedTags[item.id]
                      ? selectedTags[item.id].join(", ")
                      : ""
                  }
                  onChange={(e) => handleTagSelect(item.id, e.target.value)}
                  className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-500"
                  placeholder="Enter tags"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={Math.ceil(mockData.length / itemsPerPage)}
        onPageChange={handlePageClick}
        containerClassName="pagination flex justify-end mt-4"
        pageClassName="mx-1 px-3 py-2 border rounded cursor-pointer"
        activeClassName="bg-blue-500 text-white"
        previousClassName="mx-1 px-3 py-2 border rounded cursor-pointer"
        nextClassName="mx-1 px-3 py-2 border rounded cursor-pointer"
        disabledClassName="opacity-50"
      />
    </div>
  );
};

export default MockDataTable;
