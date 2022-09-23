import React from "react";

function SignUpInfo({ formData, setFormData ,error}) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Email..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      {error.email && <p>{error.email}</p>}
      <input
        type="password"
        placeholder="Password..."
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      {error.password && <p>{error.password}</p>}
      <input
        type="password"
        placeholder="Confirm Password..."
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
      {error.confirmPassword && <p>{error.confirmPassword}</p>}
    </div>
  );
}

export default SignUpInfo;