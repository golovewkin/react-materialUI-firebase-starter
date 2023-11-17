import { makeId } from "../../helpers/util.helper";
import React from "react";
import DeleteIconComponent from "../../components/library-based-components/icons/DeleteIconComponent";

export const getColumnsAndRowsForRequests = (data, onRemove) => {
  const rows = data.map((item) => {
    return {
      id: item.id,
      components: [
        { id: item.id + 1, markUp: <span>{item.email}</span> },
        { id: item.id + 2, markUp: <span>{item.message}</span> },
        { id: item.id + 3, markUp: <span>{item.link}</span> },
        {
          id: item.id + 4,
          markUp: (
            <div>
              <DeleteIconComponent onClick={() => onRemove(item.id)} />
            </div>
          ),
        },
      ],
    };
  });

  const columns = [
    { id: makeId(), component: <span>Email</span> },
    { id: makeId(), component: <span>Message</span> },
    { id: makeId(), component: <span>Link</span> },
    { id: makeId(), component: <span>Actions</span> },
  ];

  return { rows, columns };
};
