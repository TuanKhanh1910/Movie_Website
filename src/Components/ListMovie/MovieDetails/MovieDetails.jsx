import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getDetailsMovieAPI } from "../../../redux/slices/detailsMovieSlice";
import momnet from "moment";
import DisplayHeThongFilm from "./DisplayHeThongFilm";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { movie } = useSelector((state) => state.movie);
  // console.log("movie: ", movie);
  // console.log("params: ", params);

  useEffect(() => {
    dispatch(getDetailsMovieAPI(params.maPhim));
  }, []);
  const { hinhAnh, danhGia, moTa, ngayKhoiChieu, tenPhim } = movie;
  return (
    <div className="container w-4/5 mx-auto">
      <div className="flex gap-10 items-center">
        <div className="w-3/12">
          <img className="h-full object-cover" src={hinhAnh} alt="" />
        </div>
        <div className="w-7/12">
          <h3 className="text-3xl mb-6">
            <span className="text-red-500 font-bold">Tên Phim</span> : {tenPhim}
          </h3>
          <p className="mb-6">
            <span className="text-red-500 font-bold">Mô tả</span> : {moTa}
          </p>
          <p className="mb-6">
            <span className="text-red-500 font-bold">Ngày chiếu</span> :{" "}
            {momnet(ngayKhoiChieu).format("MMMM Do YYYY, h:mm:ss a")}
          </p>
          <p>
            {" "}
            <span className="text-red-500 font-bold">Đánh giá</span> : {danhGia}
            <i className="fa-solid fa-star text-yellow-500"></i>
          </p>
        </div>
      </div>
      <DisplayHeThongFilm />
      <div className="flex justify-between items-center mt-10 mb-10">
        <NavLink
          to="/"
          className="py-2 px-5 outline outline-yellow-600 rounded-lg hover:bg-yellow-400 duration-500 font-bold "
        >
          Quay về trang chủ
        </NavLink>
      </div>
    </div>
  );
};

export default MovieDetails;
