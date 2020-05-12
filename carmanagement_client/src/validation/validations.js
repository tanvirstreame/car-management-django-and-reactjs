const blankValidtiaion = (formValue) => {
    let valid = true;
    let error = {};
    Object.keys(formValue).forEach((name, data) => {
      if (formValue[name].length === 0) {
        error[name] = name[0].toUpperCase() + name.slice(1) + " cannot be blank"
        valid = false
      }
    })

    return {
      valid,
      error
    }

  }

export { blankValidtiaion };