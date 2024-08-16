class CoursesController < ApplicationController
  before_action :set_course, only: [:show, :update, :destroy, :add_url, :remove_url]

  # GET /courses
  def index
    @courses = Course.all
    render json: @courses, include: :urls
  end

  # GET /courses/:id
  def show
    render json: @course, include: :urls
  end

  # POST /course
  def create
    @course = Course.new(course_params)

    if @course.save
      render json: @course, status: :created
    else
      render json: @course.errors, status: :unprocessable_entity
    end
  end

  # PUT/PATCH /course/:id
  def update
    if @course.update(course_params)
      render json: @course
    else
      render json: @course.errors, status: :unprocessable_entity
    end
  end

  # DELETE /course/:id
  def destroy
    @course.destroy
  end

  # PUT /course/:id/url
  def add_url
    @url = @course.urls.new(url_params)

    if @url.save
      render json: @url, status: :created
    else
      render json: @url.errors, status: :unprocessable_entity
    end
  end

  # DELETE /course/:id/url/:url_id
  def remove_url
    @url = @course.urls.find(params[:url_id])
    @url.destroy
  end

  private

  def set_course
    @course = Course.find(params[:id])
  end

  def course_params
    params.require(:course).permit(:title, :description, :start_date, :end_date)
  end

  def url_params
    params.require(:url).permit(:url)
  end
end

