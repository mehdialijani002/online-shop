import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../cartContext";
import Navbar from "../../component/Navbar/index";
import { FaCubes } from "react-icons/fa";
import Select from "react-select";
import Joi from "joi";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useMapEvents } from "react-leaflet";

const ConfirmationPage = () => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    state: "",
    city: "",
  });

  const schema = Joi.object({
    firstName: Joi.string().required().label("نام"),
    lastName: Joi.string().required().label("نام خانوادگی"),
    state: Joi.string().required().label("استان"),
    city: Joi.string().required().label("شهر"),
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });

    if (formSubmitted) {
      const { error } = schema.validate({ [name]: value });
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error ? error.details[0].message : null,
      }));
    }
  };

  const stateOptions = [
    { value: "تهران", label: "تهران" },
    { value: "مازندران", label: "مازندران" },
    { value: "گیلان", label: "گیلان" },
  ];

  const cityOptions = {
    تهران: [
      { value: "تهران_شمال", label: "شمال" },
      { value: "تهران_جنوب", label: "جنوب" },
    ],
    مازندران: [
      { value: "بابل", label: "بابل" },
      { value: "ساری", label: "ساری" },
      { value: "امل", label: "امل" },
      { value: "بابلسر", label: "بابلسر" },
    ],
    گیلان: [
      { value: "رشت", label: "رشت" },
      { value: "بندر انزلی", label: "بندر انزلی" },
    ],
  };

  const isUserInfoProvided = Object.values(userInfo).every(
    (value) => value !== ""
  );

  const handleStateChange = (selectedOption) => {
    setUserInfo({
      ...userInfo,
      state: selectedOption.value,
      city: "",
    });
  };

  const handleCityChange = (selectedOption) => {
    setUserInfo({
      ...userInfo,
      city: selectedOption.value,
    });
  };

  const stateValue = stateOptions.find(
    (option) => option.value === userInfo.state
  );

  const cityValue = userInfo.state
    ? cityOptions[userInfo.state].find(
        (option) => option.value === userInfo.city
      )
    : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const { error } = schema.validate(userInfo, { abortEarly: false });

    if (error) {
      const errors = {};
      error.details.forEach((detail) => {
        errors[detail.context.key] = detail.message;
      });
      setValidationErrors(errors);
    } else {
      console.log("User Information:", userInfo);
    }
  };

  const [markerPosition, setMarkerPosition] = useState([32, 53]);

  const ChangeMarkerOnClick = () => {
    const map = useMapEvents({
      click(e) {
        setMarkerPosition([e.latlng.lat, e.latlng.lng]);
      },
    });

    return null;
  };

  return (
    <div>
      <Navbar />

      <div className="confirm-container">
        <div className="confirm-header">
          <FaCubes className="confirm-logo" />
        </div>
        {cartItems.length === 0 ? (
          <p className="text-center notfound-confirm-text">سفارشی یافت نشد!</p>
        ) : (
          <div>
            {isUserInfoProvided ? (
              <div>
                <h5 className="text-center notfound-confirm-header mt-3 mb-5">
                  سفارش شما با موفقیت ثبت شد.
                </h5>

                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>تصویر</th>
                      <th>نام محصول</th>
                      <th>تعداد</th>
                      <th>قیمت واحد</th>
                      <th>قیمت کل</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{ width: "50px", height: "50px" }}
                          />
                        </td>
                        <td className="confirm-font w-25">{item.title}</td>
                        <td className="confirm-font">{item.quantity}</td>
                        <td className="confirm-font">${item.price}</td>
                        <td className="confirm-font">
                          ${item.price * item.quantity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-center">مجموع قیمت: ${totalPrice}</p>
              </div>
            ) : (
              <form className="form-container" onSubmit={handleSubmit}>
                <h3 className="form-header text-center mb-3">فرم ثبت کالا</h3>
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    value={userInfo.firstName}
                    onChange={handleInputChange}
                    placeholder="نام"
                    className="form-control mb-4"
                    required
                  />
                  {validationErrors.firstName && (
                    <div className="error-message">نام الزامی است</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    value={userInfo.lastName}
                    onChange={handleInputChange}
                    placeholder="نام خانوادگی"
                    className="form-control mb-4"
                    required
                  />
                  {validationErrors.lastName && (
                    <div className="error-message">نام خانوادگی الزامی است</div>
                  )}
                </div>
                <div className="form-group">
                  <Select
                    options={stateOptions}
                    value={stateValue}
                    onChange={handleStateChange}
                    placeholder="انتخاب استان"
                    className="confirm-drop"
                    menuPlacement="auto"
                    styles={{
                      menu: (provided) => ({
                        ...provided,
                        marginTop: 0,
                      }),
                      menuList: (provided) => ({
                        ...provided,
                        maxHeight: "150px",
                        overflowY: "auto",
                      }),
                    }}
                  />
                  {validationErrors.state && (
                    <div className="error-message">انتخاب استان الزامی است</div>
                  )}

                  {userInfo.state && (
                    <div className="form-group mt-4">
                      <Select
                        options={cityOptions[userInfo.state]}
                        value={cityValue}
                        onChange={handleCityChange}
                        placeholder="انتخاب شهر"
                        className="confirm-drop"
                        menuPlacement="auto"
                        styles={{
                          menu: (provided) => ({
                            ...provided,
                            marginTop: 0,
                          }),
                          menuList: (provided) => ({
                            ...provided,
                            maxHeight: "150px",
                            overflowY: "auto",
                          }),
                        }}
                      />
                      {validationErrors.city && (
                        <div className="error-message">
                          انتخاب شهر الزامی است
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <p className="form-text mt-5">
                  *برای مشاهده رسید فرم بالا را کامل کنید*
                </p>

                <div className="w-100 map">
                  <MapContainer
                    center={[32, 53]}
                    zoom={6}
                    style={{ height: "200px" }}
                  >
                    <ChangeMarkerOnClick />
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={markerPosition}></Marker>
                  </MapContainer>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
      <div className="text-center">
        <Link to="/card" className="btn btn-outline-warning mt-5 mb-5">
          بازگشت به سبد خرید
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
