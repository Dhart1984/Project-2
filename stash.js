// function show(req, res) {
    //   Task.findById(req.params.id).then(
    //       function (task) {
    //           res.render('tasks/new', { task, title: 'Task Details' })
    //       })
    //       .catch(function (err) {
    //           console.log(err)
    //           res.redirect('/')
    //       })
    //   console.log("this function is doing something ")
    // }
    
    // router.get('/:id', taskCtrl.show)

    let bullet = Bullet.create(req.body)
    console.log(bullet.journal + " is the bullet journal here")
    goal.notes.push(bullet._id)
    return goal.save()