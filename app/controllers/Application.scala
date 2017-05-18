package controllers

import play.api._
import play.api.mvc._

class Application extends Controller {

  def index = Action {
    Ok(views.html.index("看录取 - 最好的中国留学生申请数据库"))
  }

}